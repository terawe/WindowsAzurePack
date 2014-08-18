﻿/// <reference path="scripts/storageSampleTenant.createwizard.js" />
/// <reference path="scripts/storageSampleTenant.controller.js" />
/*globals window,jQuery,Shell, StorageSampleTenantExtension, Exp*/

(function ($, global, undefined) {
    "use strict";

    var resources = [],
        constants = global.StorageSampleTenantExtension.Constants,
        StorageSampleTenantExtensionActivationInit,
        navigation,
        serviceName = constants.serviceName;

    function onNavigateAway() {
        Exp.UI.Commands.Contextual.clear();
        Exp.UI.Commands.Global.clear();
        Exp.UI.Commands.update();
    }

    function loadSettingsTab(extension, renderArea, renderData) {
        global.StorageSampleTenantExtension.SettingsTab.loadTab(renderData, renderArea);
    }

    function loadContainersTab(extension, renderArea, renderData) {
        global.StorageSampleTenantExtension.ContainersTab.loadTab(renderData, renderArea);
    }

    global.StorageSampleTenantExtension = global.StorageSampleTenantExtension || {};

    StorageSampleTenantExtensionActivationInit = function () {
        var subs = Exp.Rdfe.getSubscriptionList(),
            subscriptionRegisteredToService = global.Exp.Rdfe.getSubscriptionsRegisteredToService(serviceName),
            storageSampleExtension = $.extend(this, global.StorageSampleTenantExtension);

        // Don't activate the extension if user doesn't have a plan that includes the service.
        if (subscriptionRegisteredToService.length === 0) {
            return false; // Don't want to activate? Just bail
        }

        global.StorageSampleTenantExtension.Controller.getContainersDataSet(true);

        $.extend(storageSampleExtension, {
            viewModelUris: [storageSampleExtension.Controller.containerListUrl],
            displayName: constants.serviceDisplayName,
            navigationalViewModelUri: {
                uri: storageSampleExtension.Controller.containerListUrl,
                ajaxData: function () {
                    return global.Exp.Rdfe.getSubscriptionIdsRegisteredToService(serviceName);
                }
            },
            displayStatus: global.waz.interaction.statusIconHelper(global.StorageSampleTenantExtension.ContainersTab.statusIcons, "Status"),
            menuItems: [
                {
                    name: "StorageSampleMenuItem",
                    displayName: "Storage Sample",
                    url: "#Workspaces/StorageSampleTenantExtension",
                    preview: "createPreview",
                    isEnabled: function () {
                        return {
                            enabled: true,
                            description: "Create data services like Blob Storage Container, Hadoop etc."
                        }
                    },
                    subMenu: [
                        getQuickCreateContainerMenuItem()
                    ]
                }
            ],
            getResources: function () {
                return resources;
            }
        });

        storageSampleExtension.onNavigateAway = onNavigateAway;
        storageSampleExtension.navigation = navigation;

        Shell.UI.Pivots.registerExtension(storageSampleExtension, function () {
            var navigation = {
                tabs: [
                    {
                        id: "containers",
                        displayName: "containers",
                        template: "ContainersTab",
                        activated: loadContainersTab
                    }
                ],
                types: [
                ]
            };

            Exp.Navigation.initializePivots(this, navigation);
        });

        // Finally activate and give "the" storageSampleExtension the activated extension since a good bit of code depends on it
        $.extend(global.StorageSampleTenantExtension, Shell.Extensions.activate(storageSampleExtension));
    };

    function getQuickCreateContainerMenuItem() {
        return {
            name: "QuickCreateContainer",
            displayName: "Create Container",
            description: "Create new container",
            template: "ContainerQuickCreateMenu",
            label: "CREATE",

            opening: function () {
                var subscriptionRegisteredToService = global.Exp.Rdfe.getSubscriptionsRegisteredToService("storagesample");

                var promise = Shell.Net.ajaxPost({
                    url: global.StorageSampleTenantExtension.Controller.listLocationsUrl,
                    data: {
                        subscriptionIds: subscriptionRegisteredToService[0].id
                    }
                });
                promise.done(function (response) {
                    var listOfLocations = response.data;
                    var locationDropDown = $('#hw-qc-share-server');
                    var options = $.templates("<option value=\"{{>LocationId}}\">{{>LocationName}}</option>").render(listOfLocations);
                    locationDropDown.append(options);
                });
            },

            open: function () {
                var subscriptionRegisteredToService = global.Exp.Rdfe.getSubscriptionsRegisteredToService("storagesample");

                // TODO: Ideally if there is only one subscription, user shouldn't be prompted.
                var subscriptionDropDown = $('#hw-qc-container-subscription');
                var subscriptionOptions = $.templates("<option value=\"{{>id}}\">{{>OfferFriendlyName}}</option>").render(subscriptionRegisteredToService);
                subscriptionDropDown.append(subscriptionOptions);
            },

            ok: function (object) {
                var name = object.fields['containerName'];
                var data = {};
                data.subscriptionId = object.fields['selectedSubscription'];

                data.container = {};
                data.container.ContainerName = object.fields['containerName'];
                data.container.LocationId = object.fields['selectedLocation'];
                
                var promise = Shell.Net.ajaxPost({
                    url: global.StorageSampleTenantExtension.Controller.createContainerUrl,
                    data: data
                });

                global.waz.interaction.showProgress(
                    promise,
                    {
                        initialText: "Creating container '" + name + "'.",
                        successText: "Successfully created container '" + name + "'.",
                        failureText: "Failed to create container '" + name + "'."
                    }
                );

                promise.done(function () {
                    StorageSampleTenantExtension.Controller.getContainersDataSet(true);
                    return true;
                });
                promise.fail(function () {
                    return false;
                });
            },

            cancel: function (dialogFields) {
                // you can return false to cancel the closing
            }
        };
    }

    Shell.Namespace.define("StorageSampleTenantExtension", {
        serviceName: serviceName,
        init: StorageSampleTenantExtensionActivationInit,
        getQuickCreateContainerMenuItem: getQuickCreateContainerMenuItem
    });
})(jQuery, this);
