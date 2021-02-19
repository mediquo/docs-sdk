---
id: others
title: Other funcionalities
sidebar_label: Other funcionalities
---

This describes the other funcionalities of the sdk.

## Fetch number of unread messages

You can get the number of pending messages to read in order to be able to display them whenever and wherever you want.

```swift
👾
```

## Return intent **TODO** I think this don't be necessary

You can provide a return intent to redirect your app if you init a mediQuo SDK activity from a push or a deeplink.

```swift
👾
```

## Tracking
If you would track SDK local events, add NotificationCenter observer for each Notification you want track:

| **Event name**            | **Params**                                      | **Type**                    | **Description**                                   |
| --------------------------| ----------------------------------------------- | --------------------------- | ------------------------------------------------- |
| chat_view                 | professionalHash <br> specialityId              | String <br> int             | User enter in a chat activity 				    |
| chat_message_received     | professionalHash <br> specialityId <br> message | String <br> int <br> String | The user received a text message 				    |
| chat_message_sent         | professionalHash <br> specialityId <br> message | String <br> int <br> String | The sent received a text message 					|
| professional_profile_view | professionalHash                                | String                      | The user enter in a professional profile activity |
| medical_history_view      |                                                 |                             | The user enter in the medical history activity    |
| allergies_view            |    											  | 							| The user enter in the allergies list activity     |
| illnesses_view            |												  |    							| The user enter in the illnesses list activity     |
| medications_view          |												  | 						    | The user enter in the medications list activity   |
| reports_view              |												  |								| The user enter in the reports list activity       |
| recipes_view              |												  |       					    | The user enter in the recipes list activity       |
| call_started              |												  |             		        | The user start a call 					        |
| call_ended                |												  |      					    | The user end a call  								|
| videocall_started         |												  |      					    | The user start a videocall  						|
| videocall_ended           |                                                 |                             | The user end a videocall 						    |

Example
```swift
👾
```


