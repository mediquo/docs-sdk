---
id: methods
title: Methods
---

API Reference for the MediquoWidget library.

## Method `init(config)`

Initialize the MediquoWidget with your configuration.

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    text: {
      title: "My Title",
    },
    colors: {
      primary: "#4A1EA7",
    },
  },
});
```

### Config

- `apiKey`: Required. The API Key of your organization. [How to get an API Key](/docs/introduction#step-1-apply-and-receive-approval-for-your-organization)

- `accessToken`: Access Token issued by mediQuo server to authenticate your patient. Check more on how to
  [authorize patients](/docs/sdk/widget/authentication). If you want to skip this option completely, you can omit this value and a registration form will be displayed in order to create a temporal user.

- `show` Optional. Default: 'always'.
  Use this option to customize the visibility of the widget. Options available are `always`, `withSessionActive` and `onlyIfAvailable`.
- `theme` Optional. Default: {}
  Use this option to customize the widget to match your organization colors. You can find more about widget [customization](/docs/sdk/widget/customization).

## Method `open()`

Open the MediquoWidget programatically from anywhere.

```js
MediquoWidget.open();
```

## Method `close()`

Close the MediquoWidget programatically from anywhere.

```js
MediquoWidget.close();
```
