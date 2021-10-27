---
id: introduction
title: mediQuo SDK Android
sidebar_label: Installation
---

## Integration Example

You have a repository available on Bitbucket with a
[sample project](https://bitbucket.org/engineeringmediquo/mediquo-sdk-example/src/master/)
which contains an example of how to integrate our SDK.

## Prerequisites

- A _minSdkVersion_ of 23 (Android 6.0) or higher.
- _compileOptions_ set to Java 8.
- The AndroidX versions of the Jetpack support libraries.
- Firebase Cloud Messaging added in the project ([Firebase Cloud Messaging documentation](https://firebase.google.com/docs/cloud-messaging/android/client)).

## Configuration

**Edit your build.gradle project level:**

Add mediQuo and Tokbox maven repositories:

```json
allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
        maven { url "https://mediquo.jfrog.io/artifactory/android-sdk" }
        maven { url "https://mediquo.jfrog.io/artifactory/videocall-android" }
    }
}
```

**Edit your build.gradle app level:**

Include mediQuo SDK lib as a dependency:

```json
implementation 'com.mediquo:mediquo-sdk:1.1.2'
```

This is our latest stable version, you can confirm with us if there is a newer version that you can use.

Make sure the app's build.gradle file contains the following code snippet within android section:

```json
compileOptions {
     sourceCompatibility JavaVersion.VERSION_1_8
     targetCompatibility JavaVersion.VERSION_1_8
}
```

### Initialization

**Edit or add an application class:**

The library must be initialized inside Application.onCreate() using your _API_KEY_ provided by mediQuo.
Make sure not to use any other library method before you receive a successful response in the listener. 

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
        MediquoSDK.initialize(this, API_KEY, mediQuoInitListener)
    }
 }
 ```

### Authentication

To authenticate a patient, provide a valid _CLIENT_CODE_ previously created with [Patients API](http://developer.mediquo.com/docs/introduction/). 
Make sure not to use any other library method before you receive a successful response in the listener.


```kotlin
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
 ```

 ### Logout

In order to delete the credentials and force a logout there is the deauthenticate method. You can, or not, pass a listener to offer the result obtained.


```kotlin
private val mediquoDeAuthenticateListener = object : MediquoDeAuthenticateListener {
    override fun onSuccess() {
        /* Your logout has been successful */
    }

    override fun onFailure(message: String?) {
        /* Your logout has failed */
    }
}

private fun authenticateMediQuoSDK() {
    MediquoSDK.deAuthenticate(mediquoDeAuthenticateListener)
}
 ```

### Push notifications handling

In order to enable push notifications for chat and video call you must provide mediQuo a valid [Firebase Private Key](https://firebase.google.com/docs/cloud-messaging/auth-server#provide-credentials-manually)
and register your push tokens in the SDK.
The SDK will only process its own messages so you can send it all incoming pushes if you can't filter them properly. 

```kotlin
class MediQuoSDKExampleMessagingService : FirebaseMessagingService() {
   override fun onMessageReceived(remoteMessage: RemoteMessage) {
       super.onMessageReceived(remoteMessage)
        
       /* Your code to process remoteMessage */
       
       /* Send remoteMessage to mediQuo SDK */
       MediquoSDK.getInstance()?.onFirebaseMessageReceived(remoteMessage)
   }

   override fun onNewToken(newToken: String) {
       super.onNewToken(newToken)
       /* Register push token to mediQuo SDK */
       MediquoSDK.getInstance()?.registerPushToken(newToken)
   }
}
``` 


### Obfuscation
If you have the obfuscation enabled in your **build.gradle** file (`minifyEnabled true`) you need to add the next lines to your **proguard-rules** file:

```
-keep class com.opentok.** { *; }
-keep class org.webrtc.** { *; }
-keep class com.mediquo.ophiuchus.videocall.** { *; }
-keep class org.otwebrtc.** { *; }
-dontwarn com.opentok.**
-dontwarn org.webrtc.**
-dontwarn com.mediquo.ophiuchus.videocall.**
```
