---
id: customization
title: Customization
sidebar_label: Customization
---

# The following colors can be customized (overwritten) to fit your app.

### Main colors

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| mediquo_primary_color | Toolbars background <br> Medical history icons color |
| mediquo_primary_contrast_color | Toolbars text and back icon |
| mediquo_secondary_color | Speciality label on ProfessionalListFragment <br> Background professional description on Professional profile |
| mediquo_accent_color | Unread messages badge <br> Lock icon on Professional list |
| mediquo_notification_color| Accent color to use on push notifications |

### Chat

| **Value**                 | **Uses**                                        |
| --------------------- | --------------------------------------------------- |
| mediquo_message_text_color_mine | Text color of your own message|
| mediquo_message_background_color_mine | Background color of your own message |
| mediquo_message_text_color_their | Text color of a foreign message|
| mediquo_message_background_color_their | Background color of a foreign message |
| mediquo_message_text_color_alert | Text color of a alert message|
| mediquo_message_background_color_alert | Background color of a alert message |

### Example
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- App colors -->
    <color name="colorPrimary">#6200EE</color>
    <color name="colorPrimaryDark">#3700B3</color>
    <color name="colorAccent">#03DAC5</color>

    <!-- Main colors -->
    <color name="mediquo_primary_color">@color/colorPrimary</color>
    <color name="mediquo_secondary_color">#9952FD</color>
    <color name="mediquo_accent_color">@color/colorAccent</color>
    <color name="mediquo_primary_contrast_color">@android:color/white</color>
    <color name="mediquo_notification_color">@color/colorPrimary</color>

    <!-- Chat: My messages -->
    <color name="mediquo_message_text_color_mine">#4d4e52</color>
    <color name="mediquo_message_background_color_mine">@null</color>
    <!-- Chat: Others messages -->
    <color name="mediquo_message_text_color_their">#ffffff</color>
    <color name="mediquo_message_background_color_their">@null</color>
    <!-- Chat: Alert messages -->
    <color name="mediquo_message_text_color_alert">#4d4e52</color>
    <color name="mediquo_message_background_color_alert">@null</color>    
</resources>
```

# Font customization (overwritten).

### 1 Create font directory:

- Right-click on the res folder and go to New > Android resource directory. — The New Resource Directory window appears.
- In the Resource type list, select font, and then click OK. Note: The name of the resource directory must be font.

### 2 Add fonts:
- Add three files named ***mediquo_bold***, ***mediquo_medium*** and ***mediquo_regular*** to font directory, these files should are otf or ttf type.





