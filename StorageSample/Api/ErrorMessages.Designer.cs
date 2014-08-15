﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34014
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Terawe.WindowsAzurePack.StarterKit.StorageSample.Api {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class ErrorMessages {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal ErrorMessages() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Terawe.WindowsAzurePack.StarterKit.StorageSample.Api.ErrorMessages", typeof(ErrorMessages).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to File share {0} already exists.
        /// </summary>
        internal static string ContainerAlreadyExists {
            get {
                return ResourceManager.GetString("ContainerAlreadyExists", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to File share cannot be null.
        /// </summary>
        internal static string ContainerEmpty {
            get {
                return ResourceManager.GetString("ContainerEmpty", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to File share {0} not found.
        /// </summary>
        internal static string ContainerNotFound {
            get {
                return ResourceManager.GetString("ContainerNotFound", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Subscription cannot be null.
        /// </summary>
        internal static string EmptySubscription {
            get {
                return ResourceManager.GetString("EmptySubscription", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Batch size must be 0 or larger..
        /// </summary>
        internal static string InvalidBatchSize {
            get {
                return ResourceManager.GetString("InvalidBatchSize", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to &apos;{0}&apos; is not a valid record id. Please specify an int..
        /// </summary>
        internal static string InvalidLastId {
            get {
                return ResourceManager.GetString("InvalidLastId", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Subscription &apos;{0}&apos; is not in a valid subscription format. Subscriptions must be in GUID format..
        /// </summary>
        internal static string InvalidSubscriptionFormat {
            get {
                return ResourceManager.GetString("InvalidSubscriptionFormat", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Location {0} already exists.
        /// </summary>
        internal static string LocationAlreadyExist {
            get {
                return ResourceManager.GetString("LocationAlreadyExist", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Location can not be null.
        /// </summary>
        internal static string LocationEmpty {
            get {
                return ResourceManager.GetString("LocationEmpty", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Location {0} not found.
        /// </summary>
        internal static string LocationNotFound {
            get {
                return ResourceManager.GetString("LocationNotFound", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Network share {0} is already mapped..
        /// </summary>
        internal static string NetworkShareAlreadyMapped {
            get {
                return ResourceManager.GetString("NetworkShareAlreadyMapped", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Null Input Encountered.
        /// </summary>
        internal static string NullInput {
            get {
                return ResourceManager.GetString("NullInput", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Subscription list for updated quota batch was null or empty..
        /// </summary>
        internal static string NullOrEmptySubscriptionList {
            get {
                return ResourceManager.GetString("NullOrEmptySubscriptionList", resourceCulture);
            }
        }
    }
}
