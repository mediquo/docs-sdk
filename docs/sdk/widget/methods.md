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
  Use this option to customize the visibility of the widget. Options available are `always`, `withActiveSession` and `onlyIfAvailable`.
- `theme` Optional. Default: {}
  Use this option to customize the widget to match your organization colors. You can find more about widget [customization](/docs/sdk/widget/customization).

## Method `open()`

Open the MediquoWidget programmatically from anywhere.

```js
MediquoWidget.open();
```

## Method `getPendingConsultations()`

Get number of pending consultations.

```js
MediquoWidget.getPendingConsultations();
```

## Method `close()`

Close the MediquoWidget programmatically from anywhere.

```js
MediquoWidget.close();
```

## Method `logout()`

Logout the user programmatically from anywhere. It destroys the session and invalidates the access token. To be able to show again the widget to the user another access token should be requested.

```js
MediquoWidget.logout();
```

## Method `destroy()`

Remove the widget from your site completely. This method executes a logout and remove the widget elements from your DOM.

If you want to show again the widget after using the destroy, you can call the init method again.

```js
MediquoWidget.destroy();
```

## Method `open_room(professional_hash)`

Open a chat room programmatically with a specific professional by providing its hash.

```js
MediquoWidget.open_room("<PROFESSIONAL_HASH>");
```

