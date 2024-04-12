---
id: professionalList
title: Professional List
sidebar_label: Professional List
---

# Important!

The v1 version of the iOS SDK is **deprecated**, we highly recommend you to update to the latest version. Read the [changelog](/docs/sdk/ios/changelog) for more information.

## Professional List

The only view you must integrate inside you app is the professional list. Consists in a _UIViewController_ that shows a list of all professionals available for the current authenticated user and allows access to chats and professional profiles.

<kbd>
![Professional List](http://developer.mediquo.com/img/professional_list.jpg "Professional List")
</kbd>

<br/>
Obtain a ProfessionalsList throught:

```swift
let viewController = MediQuo.getProfessionalsList()
```

Add it to your view, inside an _UINavigationController_:

```swift
let navigationController = UINavigationController(rootViewController: viewController)
navigationController.modalPresentationStyle = .overFullScreen
self.present(navigationController, animated: false)
```

### Delegate

We strongly recommend create a class, that implements _ProfessionalsListDelegate_ for a better integration in your app, and set it throught setup styling.
<br/>
- **viewController:** Self instance of view controller that contains a professionals list
<br/>
- **getRightBarButton:** Implementation of right bar button in the professionals list view
<br/>
- **onListLoaded:** This callback is fired when the professionals list is loaded
<br/>
- **onProfessionalClick:** This callback is fired when press in any professional, for navigate to room
<br/>
> NOTE: _hasAccess_ indicates that the authenticated patient has access to the chats (has a _plan_ set via the [Patients API](/docs/api/introduction/)).
<br/>
- **onUnreadMessage:** This callback is fired when the number of unread messages has changed

```swift
class ListDelegate: ProfessionalsListDelegate {
    var viewController: BaseViewController?

    func getRightBarButton() -> UIBarButtonItem {
        // Here your UIBarButtonItem implementation
    }

    func onListLoaded() {
        // Here your callback execution code
    }

    func onProfessionalClick(professionalId: Int, specialityId: Int, hasAccess: Bool) -> Bool {
        // Here your callback execution code
    }

    func onUnreadMessage(countChange: Int) {
        // Here your callback execution code
    }
}
```
