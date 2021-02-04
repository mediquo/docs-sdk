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

| **Event name**            | **Params**                                      | **Type**                    | **Description** |
| --------------------------| ----------------------------------------------- | --------------------------- | --------------- |
| chat_view                 | professionalHash <br> specialityId              | String <br> int             ||
| chat_message_received     | professionalHash <br> specialityId <br> message | String <br> int <br> String ||
| chat_message_sent         | professionalHash <br> specialityId <br> message | String <br> int <br> String ||
| professional_profile_view | professionalHash                                | String                      ||
| medical_history_view      ||||
| allergies_view            ||||
| illnesses_view            ||||
| medications_view          ||||
| reports_view              ||||
| recipes_view              ||||
| call_started              ||||
| call_ended                ||||
| videocall_started         ||||
| videocall_ended           ||||

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


