---
id: introduction
title: mediQuo SDK iOS
sidebar_label: Installation
---

## Integration Example

You have a repository available on Bitbucket with a
[sample project](https://bitbucket.org/dllort-medipremium/mediquo-sdk-example/src/master/) **TODO**
which contains an example of how to integrate our SDK.

## Prerequisites

- A min version of **TODO** or higher.
- Firebase Cloud Messaging added in the project ([Firebase Cloud Messaging documentation](https://firebase.google.com/docs/cloud-messaging/ios/client)).

## Configuration

**TODO**

Add mediQuo and Tokbox maven repositories:

```swift
☠️
```

### Initialization

**TODO**

The library must be initialized inside AppDelegate using your _API_KEY_ provided by mediQuo...

```swift
☠️
```

### Authentication

To authenticate a patient, provide a valid _CLIENT_CODE_ previously created with [Patients API](http://developer.mediquo.com/docs/introduction/). 
Make sure not to use any other library method before you receive a successful response in the listener.


```swift
☠️
 ```

### Push notifications handling

In order to enable push notifications for chat and video call you must provide mediQuo a valid [Firebase Private Key](https://firebase.google.com/docs/cloud-messaging/auth-server#provide-credentials-manually)
and register your push tokens in the SDK.
The SDK will only process its own messages so you can send it all incoming pushes if you can't filter it properly. 

```swift
☠️
 ```


