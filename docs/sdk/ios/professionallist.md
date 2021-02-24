---
id: professionalList
title: Professional List
sidebar_label: Professional List
---

The only view you must integrate inside you app is the professional list. Consists in a _UIViewController_ that shows a list of all professionals available for the current authenticated user and allows access to chats and professional profiles.

<kbd>
![Professional List](http://developer.mediquo.com/img/professional_list.jpg "Professional List")
</kbd>

<br/>
Obtain a ProfessionalsList throught:

```swift
let viewController = MediQuo.getProfessionalsList(delegate: self)
```

Add it to your view:

```swift
let navigationController = UINavigationController(rootViewController: viewController)
self.addChild(navigationController)
self.view.addSubview(navigationController.view)
navigationController.view.frame = self.view.bounds
navigationController.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
navigationController.didMove(toParent: self)
```

<br/>
We strongly recommend adding a _ProfessionalList Protocol_ for a better integration in your app.
<br/>
Note: _onNotAvailable_ allows you to control chat openings to suit your business logic.
<br/>
_hasAccess_ indicates that the authenticated patient has access to the chats (has a _plan_ set via the [Patients API](http://developer.mediquo.com/docs/introduction/)).

```swift
extension ViewController: ProfessionalsListProtocol {
    func onNotAvailable(isAvailable: Bool, professionalId: Int, specialityId: Int) {
    	// Here your callback execution code
    }
}
```
