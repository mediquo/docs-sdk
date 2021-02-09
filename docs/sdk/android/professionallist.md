---
id: professionalList
title: Professional List
sidebar_label: Professional List
---

The only view you must integrate inside you app is the professional list.
Consists on a _fragment_ that shows a list of all professionals visible for the current authenticated user and allows access to chats and professional profiles.  

<kbd>
![Professional List](http://developer.mediquo.com/img/professional_list.jpg "Professional List")
</kbd>

##### Create ProfessionalListFragment:

```kotlin
private val professionalList: ProfessionalListFragment by lazy { ProfessionalListFragment() }
```

##### Add _ProfessionalListFragment_ to your fragment content:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {        
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    supportFragmentManager
        .beginTransaction()
        .replace(R.id.content, professionalList)
        .commitAllowingStateLoss()
}
```

##### Add a _ProfessionalListListener_:

Add a _ProfessionalListListener_ to better integrate the list in your app.
In _onProfessionalClick()_ even _hasAccess_ is _true_, you can cancel the chat opening to fit your needs like promote conversion.
_hasAccess_ will be true for patient has a _plan_ set via the [Patients API](http://developer.mediquo.com/docs/introduction/).

```kotlin
private val listListener = object : ProfessionalListListener {
    override fun onListLoaded() {
        /* Called after list has been loaded */      
    }

    override fun onProfessionalClick(
        professionalId: Long,
        specialityId: String?,
        hasAccess: Boolean
    ): Boolean {
        /* Return true to allow the chat opening */
        return true
    }

    override fun onUnreadMessageCountChange(unreadMessageCount: Int?) {
        /* Called when unread message count chenges */           
    }

}

private fun setProfessionalListListener(listener: ProfessionalListListener) {
    professionalList.setProfessionalListListener(listener)
}
```
