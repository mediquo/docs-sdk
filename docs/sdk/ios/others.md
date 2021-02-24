---
id: others
title: Other funcionalities
sidebar_label: Other funcionalities
---

This describes the other funcionalities of the sdk.

## Fetch number of unread messages

You can get the number of pending messages to read in order to be able to display them whenever and wherever you want.

```swift
MediQuo.getPendingMessages { count in
    // Here your callback execution code
}
```

## Tracking
If you would track SDK local events, add NotificationCenter observer for each Notification you want track:

| **Event name**            | **Params**                                      | **Type**                    | **Description**                                   |
| --------------------------| ----------------------------------------------- | --------------------------- | ------------------------------------------------- |
| com.mediquo.notification.name.<br>event.chat.view                 | professionalHash <br> specialityId              | String <br> int             | User enter in a chat activity 				    |
| com.mediquo.notification.name.<br>event.chat.message.received     | professionalHash <br> specialityId | String <br> int | The user received a text message 				    |
| com.mediquo.notification.name.<br>event.chat.message.send         | professionalHash <br> specialityId | String <br> int | The sent received a text message 					|
| com.mediquo.notification.name.<br>event.professionalProfile.view | professionalHash                                | String                      | The user enter in a professional profile activity |
| com.mediquo.notification.name.<br>event.medicalHistory.view      |                                                 |                             | The user enter in the medical history activity    |
| com.mediquo.notification.name.<br>event.allergies.view            |    											  | 							| The user enter in the allergies list activity     |
| com.mediquo.notification.name.<br>event.illnesses.view            |												  |    							| The user enter in the illnesses list activity     |
| com.mediquo.notification.name.<br>event.medications.view          |												  | 						    | The user enter in the medications list activity   |
| com.mediquo.notification.name.<br>event.reports.view              |												  |								| The user enter in the reports list activity       |
| com.mediquo.notification.name.<br>event.recipes.view              |												  |       					    | The user enter in the recipes list activity       |
| com.mediquo.notification.name.<br>event.call.started              |												  |             		        | The user start a call 					        |
| com.mediquo.notification.name.<br>event.chat.call.ended                |												  |      					    | The user end a call  								|
| com.mediquo.notification.name.<br>event.videocall.started         |												  |      					    | The user start a videocall  						|
| com.mediquo.notification.name.<br>event.chat.videocall.ended           |                                                 |                             | The user end a videocall 						    |

Example
```swift
// MARK: - Tracking

extension ViewController {
    private func bindNotifications() {
        // Chat
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onChatView(notification:)),
        	name: Notification.Name.Event.Chat.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onMessageSend(notification:)),
			name: Notification.Name.Event.Chat.messageSend, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onMessageReceived(notification:)),
        	name: Notification.Name.Event.Chat.messageReceived, object: nil)

        // Professional profile
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onProfessionalProfileView(notification:)),
        	name: Notification.Name.Event.ProfessionalProfile.view, object: nil)

        // Call
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onCallStarted),
        	name: Notification.Name.MediQuoVideoCall.Sdk.Call.Started, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onCallEnded),
        	name: Notification.Name.MediQuoVideoCall.Sdk.Call.Ended, object: nil)

        // VideoCall
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onVideoCallStarted),
        	name: Notification.Name.MediQuoVideoCall.Sdk.VideoCall.Started, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onVideoCallEnded),
			name: Notification.Name.MediQuoVideoCall.Sdk.VideoCall.Ended, object: nil)

        // Medical history
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onMedicalHistoryView),
			name: Notification.Name.Event.MedicalHistory.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onAllergiesView),
        	name: Notification.Name.Event.Allergies.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onIllenessesView),
        	name: Notification.Name.Event.Illnesses.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onMedicationsView),
        	name: Notification.Name.Event.Medications.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onReportsView),
        	name: Notification.Name.Event.Reports.view, object: nil)
        NotificationCenter.default.addObserver(self,
        	selector: #selector(self.onRecipesView),
        	name: Notification.Name.Event.Recipes.view, object: nil)
    }

    deinit {
        NotificationCenter.default.removeObserver(self)
    }

    @objc func onChatView(notification: Notification) {
        guard let professionalHash: String =
				notification.userInfo?[Notification.Name.Key.professionalHash] as? String,
              let specialityId: Int =
              	notification.userInfo?[Notification.Name.Key.specialityId] as? Int else {
            return
        }
        // Here your code
    }

    @objc func onMessageSend(notification: Notification) {
        guard let professionalHash: String =
				notification.userInfo?[Notification.Name.Key.professionalHash] as? String,
              let specialityId: Int =
              	notification.userInfo?[Notification.Name.Key.specialityId] as? Int else {
            return
        }
        // Here your code
    }

    @objc func onMessageReceived(notification: Notification) {
        guard let professionalHash: String =
				notification.userInfo?[Notification.Name.Key.professionalHash] as? String,
              let specialityId: Int =
              	notification.userInfo?[Notification.Name.Key.specialityId] as? Int else {
            return
        }
        // Here your code
    }

    @objc func onProfessionalProfileView(notification: Notification) {
        guard let professionalHash: String =
				notification.userInfo?[Notification.Name.Key.professionalHash] as? String {
            return
        }
        // Here your code
    }

    @objc func onCallStarted() {
        // Here your code
    }

    @objc func onCallEnded() {
        // Here your code
    }

    @objc func onVideoCallStarted() {
        // Here your code
    }

    @objc func onVideoCallEnded() {
        // Here your code
    }

    @objc func onMedicalHistoryView() {
        // Here your code
    }

    @objc func onAllergiesView() {
        // Here your code
    }

    @objc func onIllenessesView() {
        // Here your code
    }

    @objc func onMedicationsView() {
        // Here your code
    }

    @objc func onReportsView() {
        // Here your code
    }

    @objc func onRecipesView() {
        // Here your code
    }
}
```