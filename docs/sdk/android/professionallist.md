---
id: professionalList
title: Professional List
sidebar_label: Professional List
---

This describes how to add the **ProfessionalListFragment** to your Android app.

## Create ProfessionalListFragment

```kotlin
...

private val professionalList: ProfessionalListFragment by lazy { ProfessionalListFragment() }

...
 ```

## Add ProfessionalListFragment to your fragment content

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

## You can add a Listener to ProfessionalListFragment

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
