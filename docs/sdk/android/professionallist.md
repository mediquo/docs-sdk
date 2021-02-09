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

<br/>
Create ProfessionalListFragment:

```kotlin
private val professionalList: ProfessionalListFragment by lazy { ProfessionalListFragment() }
```

<br/>
Add it to your view:

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

<br/>
We strongly recommend adding a _ProfessionalListListener_ and use its callbacks for a better integration in your app.
<br/>Note: In _onProfessionalClick()_ you can cancel the chat opening to fit your business needs like promote conversions.
_hasAccess_ will be true for patients with _plan_ different than _null_ set via the [Patients API](http://developer.mediquo.com/docs/introduction/).

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
