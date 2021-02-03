---
id: introduction
title: mediQuo SDK Android
sidebar_label: Getting started
---

This describes the resources that make up the official mediQuo SDK for Android.

## Introduction

This guide assumes that you have already prepared your Android app to receive Firebase Notifications push, if you are not already, you can see the documentation in the following link:
[Firebase Cloud Messaging documentation](https://firebase.google.com/docs/cloud-messaging)

### Installation

**Edit your build.gradle project level:**

Add mediQuo SDK and Tokbox maven repositories

```json
allprojects {
    repositories {
        google()
        jcenter()
        maven { url "https://mediquo.bintray.com/mediquo-lib"}
        maven { url "https://tokbox.bintray.com/maven" }
    }
}
```

**Edit your build.gradle app level:**

Include mediQuo SDK lib as a dependency

```json
implementation 'com.mediquo:mediquo-sdk:+'
```

Make sure the app's build.gradle file contains the following code snippet within android section

```json
compileOptions {
     sourceCompatibility JavaVersion.VERSION_1_8
     targetCompatibility JavaVersion.VERSION_1_8
}
```

### Initialization

**Edit or add an application class:**

Call to initialization method, you need to provide a valid context and your api key.
You can initialize it with or without initialization callback.

```kotlin
class App : Application() {

    private val mediQuoInitListener = object : MediquoInitListener {
        override fun onFailure(message: String?) {
            /* Your initialization has failed */
        }

        override fun onSuccess() {
            /* Your initialization has been successful */
        }
    }

    override fun onCreate() {
        super.onCreate()
        MediquoSDK.initialize(this, YOUR_KEY, mediQuoInitListener)
    }

 }
 ```

### Authentication

You must provide to your clients a valid authentication code and then call the authentication method of the sdk. You can authenticate it with or without authentication callback.


```kotlin
...

private val mediQuoAuthenticateListener = object : MediquoAuthenticateListener {
    override fun onFailure(message: String?) {
        /* Your authentication has failed */
    }

    override fun onSuccess() {
        /* Your authentication has been successful */
    }

}

    
private fun authenticateMediQuoSDK() {
    MediquoSDK.authenticate(CLIENT_CODE, mediQuoAuthenticateListener)
}
...

 ```

### Push notifications

You must register your notification token in the sdk.
When you receive a remoteMessage, delegate to mediQuoSDK and then you can process the remoteMessage if not a mediQuoSDK message.

```kotlin
class MediQuoSDKExampleMessagingService : FirebaseMessagingService() {

   override fun onMessageReceived(remoteMessage: RemoteMessage) {
       super.onMessageReceived(remoteMessage)
       /* Delegate remoteMessage to mediQuo SDK */
       MediquoSDK.getInstance()?.onFirebaseMessageReceived(remoteMessage)
   }

   override fun onNewToken(newToken: String) {
       super.onNewToken(newToken)
       /* Register push token to mediQuo SDK */
       MediquoSDK.getInstance()?.registerPushToken(newToken)
   }
}
```

