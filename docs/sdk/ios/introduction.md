---
id: introduction
title: mediQuo SDK iOS
sidebar_label: Installation
---

## Integration Example

You have a repository available on Bitbucket with a
[sample project](https://bitbucket.org/engineeringmediquo/mediquo-sdk-example-ios/src/master/)
which contains an example of how to integrate our SDK.

## Prerequisites

- A min version of iOS 11 or higher.
- Firebase Cloud Messaging added in the project ([Firebase Cloud Messaging documentation](https://firebase.google.com/docs/cloud-messaging/ios/client)).

## Configuration

**In your** [Podfile](https://guides.cocoapods.org/syntax/podfile.html)

Add Cocoapods and mediQuo repositories, and install **MediQuo-Base** pod:

```swift
source 'https://github.com/CocoaPods/Specs.git'
source 'https://bitbucket.org/engineeringmediquo/specs-ios.git'

platform :ios, '11.0'
install! 'cocoapods', :disable_input_output_paths => true

target 'mediquo-sdk-example-ios' do
  use_frameworks!
  pod 'MediQuo-Base', '~> 1.4.0'
end
```

### Pod import

For instantiate _MediQuo_Base_ pod, you must to import it before in each class.

```swift
import MediQuo_Base
```

### Initialization

The library must be initialized inside AppDelegate using your _API_KEY_ provided by mediQuo, and with your own styles, with the [Customization](https://developer.mediquo.com/docs/sdk/ios/customization) implementation.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    MediQuo.initialize(apiKey: API_KEY, style: Styles.style) { result in
        if case .success = result {
            CoreLog.business.info("Initialize has been done successfully")
        }
        if case let .failure(error) = result {
            CoreLog.business.info("Initialize has errors %@", error.description)
        }
    }
    return true
}
```

### Authentication

To authenticate a patient, provide a valid _CLIENT_CODE_ previously created with [Patients API](http://developer.mediquo.com/docs/introduction/).
Make sure not to use any other library method before you receive a successful response in the listener.

```swift
MediQuo.authenticate(clientCode: CLIENT_CODE) { [weak self] status in
    guard case SdkStatus.ready = status else {
        fatalError("Can't authenticate")
    }
    // Congratulations, you've been authenticated successfully!!
}
```

### Push notifications handling

In order to enable push notifications for chat and video call you must provide mediQuo a valid [Firebase Private Key](https://firebase.google.com/docs/cloud-messaging/auth-server#provide-credentials-manually)
and register your push tokens in the SDK.

```swift
MediQuo.registerFirebase(token: fcmToken) { result in
    if result {
        CoreLog.firebase.info("Firebase registration token: %@", fcmToken)
    } else {
        CoreLog.firebase.error("Can't register Firebase registration token")
    }
}
```

The received push notifications should be forwarded to the SDK using this method. You can filter the pushes and send only the mediQuo ones or you can send all the received pushes, the SDK will only process its own messages.

```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                 fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    MediQuo.didReceiveRemoteNotification(userInfo: userInfo, completion: completionHandler)
}

extension AppDelegate: UNUserNotificationCenterDelegate {
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification,
                                withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        let userInfo = notification.request.content.userInfo
        MediQuo.willPresentRemoteNotification(userInfo: userInfo, completion: completionHandler)
    }
}
```

There are two options to manage the behaviour once a push notification is received. You can delegate the whole responsibility to the SDK. In this case the SDK will prompt the chat room for the user.

```swift
extension AppDelegate: UNUserNotificationCenterDelegate {
    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        MediQuo.didReceiveRemoteNotification(userInfo: userInfo, completion: completionHandler)
    }
}
```

Or you can manage the behaviour using the `didReceiveRemoteNotificationWithViewController` method. In this case the SDK will return the chat room ViewController so you can place it in your navigation.

```swift
extension AppDelegate: UNUserNotificationCenterDelegate {
    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        MediQuo.didReceiveRemoteNotificationWithViewController(userInfo: userInfo) { viewController in
            // Your code here
        }
    }
}
```

### Logout

In order to delete the credentials and force a logout there is the deauthenticate method. It expose a closure witch returns true if the deathentication was finished successfully and false if not.

```swift
MediQuo.deauthenticate { result in
    if result {
        CoreLog.firebase.info("Deauthentication service was finished successfully")
    } else {
        CoreLog.firebase.error("Deauthentication service couldn't finished successfully")
    }
}
```
