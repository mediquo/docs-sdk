---
id: customization
title: Customization
sidebar_label: Customization
---

The following colors can be customized (overwritten) to fit your app.

## Main colors

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| mediquo_primary_color | Toolbars background <br> Medical history icons color |
| mediquo_primary_contrast_color | Toolbars text and back icon |
| mediquo_secondary_color | Speciality label on ProfessionalListFragment <br> Background professional description on Professional profile |
| mediquo_accent_color | Unread messages badge <br> Lock icon on Professional list |
| mediquo_notification_color| Accent color to use on push notifications |

## Chat

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| mediquo_message_text_color_date | Text color of message of type date |
| mediquo_message_background_color_date | Background color of message of type date |
| mediquo_message_text_color_mine | Text color of your own message|
| mediquo_message_background_color_mine | Background color of your own message |
| mediquo_message_text_color_their | Text color of a foreign message|
| mediquo_message_background_color_their | Background color of a foreign message |
| mediquo_message_text_color_alert | Text color of a alert message|
| mediquo_message_background_color_alert | Background color of a alert message |

## Example
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#6200EE</color>
    <color name="colorPrimaryDark">#3700B3</color>
    <color name="colorAccent">#03DAC5</color>

    <color name="mediquo_primary_color">@color/colorPrimary</color>
    <color name="mediquo_secondary_color">#9952FD</color>
    <color name="mediquo_accent_color">@color/colorAccent</color>

    <color name="mediquo_primary_contrast_color">@android:color/white</color>

    <!-- Chat: Date message -->
    <color name="mediquo_message_text_color_date">#9e9e9e</color>
    <color name="mediquo_message_background_color_date">@null</color>

    <!-- Chat: My text message -->
    <color name="mediquo_message_text_color_mine">#4d4e52</color>
    <color name="mediquo_message_background_color_mine">@null</color>

    <!-- Chat: Others text message -->
    <color name="mediquo_message_text_color_their">#ffffff</color>
    <color name="mediquo_message_background_color_their">@null</color>

    <!-- Chat: Others alert message -->
    <color name="mediquo_message_text_color_alert">#4d4e52</color>
    <color name="mediquo_message_background_color_alert">@null</color>

    <!-- Push notification: The accent color to use -->
    <color name="mediquo_notification_color">@color/colorPrimary</color>
</resources>
```





