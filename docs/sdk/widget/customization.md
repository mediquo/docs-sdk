---
id: customization
title: Customization
---

You can customize the look an feel, the language of your widget integration and the legal document links.

## Options

You can turn on or off different settings of the widget.

### `showInitialMessage`

Default: false.

On temporal users it opens an automatic message 2 seconds after the initialization. You can customize the text using the `initial_message` text field.

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
  showInitialMessage: true,
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
    exclude: Array<"gender" | "birthdate">;
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
  hideCloseButton?: boolean;
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
  exclude: Array<"gender" | "birthdate">;
};
```

Example:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  theme: {
    registration: {
      exclude: ["gender", "birthdate"] // This will exclude gender and birthdate fields from temporal patient registration form.
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

## Localization

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
