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

TBD

