---
id: introduction
title: Introduction
---

In this page you will find how to integrate our widget to your website quickly and easily. **It requires the registration of your patients beforehand** so that they can start using the widget.

You can check our [API Reference](/docs/patients) for more details on how to register your patients.

## Integration

In order to integrate the widget you will have to add the following scripts to your page.

```html
<script
  type="text/javascript"
  src="https://widget.mediquo.com/js/1.0.0/mediquo.js"
></script>
```

You will also have to initialize our widget with your Api Key. If you want to initialize it with the session of a patient you will have to provide its [access token](/docs/sdk/widget/authentication). If the access token is not provided, the widget will display a form to create temporary user and the session will expire on the following initialization.

### Example: Widget with patient session

This example below will initialize the widget with your patient user.

```html
<script>
  window.onload = () => MediquoWidget.init({
    apiKey: <YOUR-API-KEY>,
    accessToken: <USER-ACCESS-TOKEN>,
  });
</script>
```

### Example: Widget without session

This example below will initialize the widget without any session and will display a form to the end user to register a temporal access to chat with the professionals.

```html
<script>
  window.onload = () => MediquoWidget.init({
    apiKey: <YOUR-API-KEY>,
  });
</script>
```

## Localization

Currently supported languages are `es`, `en` and `pt`. By default it will be set to `en`. You can define the locale during initialization.

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    locale: "es",
  },
});
```

## MediquoWidget

API Reference for the MediquoWidget library.

### Method `init(config)`

Initialize the MediquoWidget with your configuration.

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    text: {
      title: "My Title"
    },
    colors: {
      primary: "#4A1EA7
    }
  }
});
```

#### Config

- `apiKey`: Required. The API Key of your organization. [How to get an API Key](/docs/introduction#step-1-apply-and-receive-approval-for-your-organization)

- `accessToken`: Access Token issued by mediQuo server to authenticate your patient. Check more on how to
  [authorize patients](/docs/sdk/widget/authentication). If you want to skip this option completely, you can omit this value and a registration form will be displayed in order to create a temporal user.

- `theme` Optional. Default: {}
  Use this option to customize the widget to match your organization colors. You can find more about widget [customization](/docs/sdk/widget/customization).

### Method `open()`

Open the MediquoWidget programatically from anywhere.

```js
MediquoWidget.open();
```

### Method `close()`

Close the MediquoWidget programatically from anywhere.

```js
MediquoWidget.close();
```

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <script
      type="text/javascript"
      src="https://widget.mediquo.com/js/1.0.0/mediquo.js"
    ></script>
    <script>
      window.onload = () => MediquoWidget.init({
        apiKey: <YOUR-API-KEY>,
        accessToken: <USER-ACCESS-TOKEN>,
      });
    </script>
  </body>
</html>
```
