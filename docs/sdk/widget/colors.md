---
id: colors
title: Customize
---

You can customize the look an feel of your widget integration through the theme option on the widget initialization.

## Colors

## Example

````html
<script>
  window.onload = () =>
    MediquoWidget.init({
      apiKey: <YOUR-API-KEY>,
      accessToken: <USER-ACCESS-TOKEN>,
      theme: {
        colors: {
          primary: "#1C93DE",
          primaryContrast: "#FFFFFF",
          secondary: "#3C50EC",
          accent: "#42CECE",
          messageTextOutgoing: "#201552",
          messageTextIncoming: "#201552",
          bubbleBackgroundOutgoing: "#ECEFF1",
          bubbleBackgroundIncoming: "#F4FAFD",
          alertText: "#201552",
          alertBackground: "#F4FAFD",
        },
      },
    });
</script>
```
````
