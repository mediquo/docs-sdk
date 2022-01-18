---
id: customization
title: Customization
sidebar_label: Customization
---

The following colors can be customized, throught the _MediQuoStyleType_ implementation, in your app.

For setup this customization, you may to send this implementation in [Installation](https://developer.mediquo.com/docs/sdk/ios/introduction/#initialization) process.
</br>
NOTE: If you don't setup this, will be establish a default customization.

## Main colors

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| primaryColor | Toolbars background <br> Medical history icons color |
| primaryContrastColor | Toolbars text and back icon |
| secondaryColor | Speciality label on ProfessionalListFragment <br> Background professional description on Professional profile |
| accentColor | Unread messages badge <br> Lock icon on Professional list |

## Chat

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| messageTextDateColor | Text color of message of type date |
| messageBackgroundDateColor | Background color of message of type date |
| messageTextOutgoingColor | Text color of your own message|
| bubbleBackgroundOutgoingColor | Background color of your own message |
| messageTextIncomingColor | Text color of a foreign message|
| bubbleBackgroundIncomingColor | Background color of a foreign message |
| professionalsListDelegate | Delegate implementation for provide additional functionalities to [Professional List](https://developer.mediquo.com/docs/sdk/ios/professionalList/#delegate) |
| bookFont | Book UIFont instance |
| mediumFont | Medium UIFont instance |
| boldFont | Bold UIFont instance |

## Example
```swift
static var style: MediQuoStyleType {
    var style = MediQuoStyle()
    style.prefersLargeTitles = true
    style.primaryColor = UIColor(hex: "#6200EEFF")
    style.primaryContrastColor = .white
    style.secondaryColor = UIColor(hex: "#9952FDFF")
    style.accentColor = UIColor(hex: "#03DAC5FF")
    style.messageTextDateColor = UIColor(hex: "#9E9E9EFF") 
    style.messageBackgroundDateColor = .white
    style.messageTextOutgoingColor = UIColor(hex: "#4D4E52FF") 
    style.bubbleBackgroundOutgoingColor = .gray
    style.messageTextIncomingColor = UIColor(hex: "#4D4E52FF") 
    style.bubbleBackgroundIncomingColor = .lightGray
    style.professionalsListDelegate = ListDelegate()
    style.bookFont = UIFont(name: "Devil Breeze Book", size: 16)
    style.mediumFont = UIFont(name: "Devil Breeze Medium", size: 16)
    style.boldFont = UIFont(name: "Devil Breeze Bold", size: 16)
    return style
}
```

Additionaly you can active the [prefersLargeTitles](https://developer.apple.com/documentation/uikit/uinavigationbar/2908999-preferslargetitles) for ProfessionalsList, you can set this flag true (default), of false for deactivate it.





