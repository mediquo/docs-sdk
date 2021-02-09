---
id: professionalList
title: Professional List
sidebar_label: Professional List
---

The only view you must integrate inside you app is the professional list.
Consists on a _fragment_ that shows a list of all professionals visible for the current authenticated user.  

![Professional List](http://developer.mediquo.com/docs/sdk/android/professionalList/professional_list.jpg "Professional List")

Create ProfessionalListFragment:

```kotlin
...

private val professionalList: ProfessionalListFragment by lazy { ProfessionalListFragment() }

...
```

Add _ProfessionalListFragment_ to your fragment content:

```kotlin
...

override fun onCreate(savedInstanceState: Bundle?) {        
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    setFragment(professionalList)

}

private fun setFragment(fragment: Fragment) {
    supportFragmentManager
        .beginTransaction()
        .replace(R.id.content, fragment)
        .commitAllowingStateLoss()
}

...
```

You can add a listener to _ProfessionalListFragment_:

```kotlin
...

private val listListener = object : ProfessionalListListener {
    override fun onListLoaded() {
        /* List of professionals loaded */      
    }

    override fun onProfessionalClick(
        professionalId: Long,
        specialityId: String?,
        hasAccess: Boolean
    ): Boolean {
        /* Return boolean value based on your business rules to open or not a chat */
        return true
    }

    override fun onUnreadMessageCountChange(unreadMessageCount: Int?) {
        /* Number of unread messages after load list */           
    }

}

private fun setProfessionalListListener(listener: ProfessionalListListener) {
    professionalList.setProfessionalListListener(listener)
}

...
```
