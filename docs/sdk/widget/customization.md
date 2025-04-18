---
id: customization
title: Customization
---

You can customize the look an feel, the language of your widget integration and the legal document links.

## Options

You can turn on or off different settings of the widget.

### `showInitialMessage`

Default: false.

On temporal users it opens an automatic message 2 seconds after the initialization. You can customize the text using the `initial_message` text field.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  showInitialMessage?: true,
});
```
### `showPracticeCountry`

Default: false.

Display the work practice country of each professional directly on the widget interface. This feature provides transparency about the healthcare provider based on their practice location.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  showPracticeCountry?: true,
});
```

### `isMobileView`

Default: false.

You can customize the size of the window container to open full screen by setting it to `true`, otherwise it will be responsive.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  isMobileView?: true,
});
```

### `mute`

Default: false.

You can mute the notification sounds of incoming messages by setting it to `true`.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  mute?: true,
});
```

### `adapter`

Default: "web".

If you are integrating the widget in a hybrid mobile app framework, you can adapt some functionalities by setting any of these values.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  adapter?: "web" | "cordova",
});
```

## Look and feel

The look an feel can be configured through the `theme` option on the widget initialization.

```ts
// Typescript
type Theme = {
  position?: "left" | "right";
  launcher?: "base" | "extended" | "hidden";
  registration?: {
    exclude: Array<"gender" | "birthdate"| "tax_id">;
    include: Array<"postal_code">
  };
  locale?: "es" | "en" | "pt";
  terms_link?: string;
  privacy_link?: string;
  text?: {
    title?: string;
    launcher?: string;
    welcome_title?: string;
    welcome_text?: string;
    welcome_button?: string;
    medical_consent_disclaimer?: string;
    offline_professional_disclaimer?: string;
    terms?: string;
    privacy?: string;
    initial_message?: string;
  };
  colors?: {
    primary?: string;
    primaryContrast?: string;
    secondary?: string;
    accent?: string;
    messageTextSystem?: string;
    messageTextOutgoing?: string;
    messageTextIncoming?: string;
    bubbleBackgroundSystem?: string;
    bubbleBackgroundOutgoing?: string;
    bubbleBackgroundIncoming?: string;
    alertText?: string;
    alertBackground?: string;
  };
  hideCloseButton?: "true" | "false";
};
```


### Position

```ts
// Typescript
type Theme = {
  position?: "left" | "right";
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    position: "left"
  },
```

### Launcher

```ts
// Typescript
type Theme = {
  // Base shows only a button, extended a button with a text and hidden does not show the launcher.
  launcher?: "base" | "extended" | "hidden";
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    launcher: "extended"
  },
```

### Registration

```ts
// Typescript
type Registration = {
  exclude: Array<"gender" | "birthdate" | "tax_id">;
  include: Array<"postal_code">
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  theme: {
    registration: {
      exclude: ["gender", "birthdate", "tax_id"] // This will exclude gender and birthdate fields from temporal patient registration form.
      include: ["postal_code"] // This will include postal code field from temporal patient registration form.
    }
  },
```

### Text

```ts
// Typescript
type Theme = {
  text?: {
    // Text of the launcher button
    launcher?: string;

    // Title of the widget (visible in the header)
    title?: string;

    // Messages inside the room with a professional
    medical_consent_disclaimer?: string;
    offline_professional_disclaimer?: string;

    // Texts for the welcome page of the widget without session
    welcome_title?: string;
    welcome_text?: string;
    welcome_button?: string;

    // Texts for terms label and privacy label on register form (HTML is accepted)
    terms?: string;
    privacy?: string;

    // Text for the initial message that is shown with the flag showInitialMessage
    initial_message?: string;
  };
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    text: {
      title: "Custom title",
      launcher: "Custom launcher"
      privacy: "Custom privacy conditions <a href='https://customurl.com/privacy' target='_blank' rel='noopener noreferer'>Custom privacy</a>",
    }
  },
```

### Colors

```ts
// Typescript
type Theme = {
  colors?: {
    primary: string;
    primaryContrast: string;
    secondary: string;
    accent: string;
    messageTextSystem: string;
    messageTextOutgoing: string;
    messageTextIncoming: string;
    bubbleBackgroundSystem: string;
    bubbleBackgroundOutgoing: string;
    bubbleBackgroundIncoming: string;
    alertText: string;
    alertBackground: string;
  };
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    colors: {
      primary: "#1C93DE",
      primaryContrast: "#FFFFFF",
      secondary: "#3C50EC",
      accent: "#42CECE",
      messageTextSystem: "#3C50EC",
      messageTextOutgoing: "#201552",
      messageTextIncoming: "#201552",
      bubbleBackgroundSystem: "#ECEEFD",
      bubbleBackgroundOutgoing: "#ECEFF1",
      bubbleBackgroundIncoming: "#F4FAFD",
      alertText: "#201552",
      alertBackground: "#F4FAFD",
    },
  },
```

### Localization

You can define the locale during initialization. Currently supported languages are `es`, `en` and `pt`. By default it will be set to `en`.

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
    locale: "es",
  },
});
```
### hideCloseButton

Default: false.

```ts
// Typescript
type Theme = {
  // You can hide the close widget button from the top navigation bar in full window mode for smaller screens.
  hideCloseButton?: "true" | "false"
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  theme: {
  hideCloseButton: "true",
  }
});
```


## Legal documents

In the registration form of the widget without session there are two checkboxes for the "Terms and Conditions" and the "Privacy Policy". You can set your own link to your documents using these options:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  theme: {
    terms_link: "YOUR-T&C-URL",
    privacy_link: "YOUR-PRIVACY-URL",
  },
});
```
