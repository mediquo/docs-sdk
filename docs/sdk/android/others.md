---
id: others
title: Other funcionalities
sidebar_label: Other funcionalities
---

This describes the other funcionalities of the sdk.

## Fetch number of unread messages

You can get the number of pending messages to read in order to be able to display them whenever and wherever you want.

```kotin
...
private val unreadMessagesLister = object : MediquoUnreadMessagesListener {
    override fun onResponse(count: Int) {
    	/* Number of pending messages to read */  
    }

}

private fun fetchUnreadMessages() {
    MediquoSDK.getInstance()?.getUnreadMessageCount(unreadMessagesLister)
}
...


```

## Return intent

You can provide a return intent to redirect your app if you init a mediQuo SDK activity from a push or a deeplink.

```kotlin
MediquoSDK.getInstance()?.returnIntent = yourIntent
```

## Tracking
If you would track SDK local events, implements a BroadcastReceiver with IntentFilter action to match: **com.mediquo.sdk.event**

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
```kotin
class SDKReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {

        val eventType = intent.extras?.getString(EVENT_KEY)

        val message = intent.extras?.getString(MESSAGE)
        val hash = intent.extras?.getString(PRO_HASH)
        val specialityId = intent.extras?.getInt(SPECIALITY_ID, -1)

        when (eventType) {
            CHAT_VIEW -> { /* Event chat view */ }
            CHAT_MESSAGE_RECEIVED -> { /* Event message received */ }
            CHAT_MESSAGE_SENT -> { /* Event message sent */ }
            PROFESSIONAL_PROFILE_VIEW -> { /* Event professional profile view */ }
            MEDICAL_HISTORY_VIEW -> { /* Event medical history view */ }
            ALLERGIES_VIEW -> { /* Event allergies view */ }
            ILLNESSES_VIEW -> { /* Event illnesses view */ }
            MEDICATIONS_VIEW -> { /* Event medications view */ }
            REPORTS_VIEW -> { /* Event reports view */ }
            RECIPES_VIEW -> { /* Event recipes view */ }
            CALL_STARTED -> { /* Event call started */ }
            CALL_ENDED -> { /* Event call ended */ }
            VIDEOCALL_STARTED -> { /* Event videocall started */ }
            VIDEOCALL_ENDED -> { /* Event videocall ended */ }
        }
    }
}
```


