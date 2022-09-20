---
id: integration
title: Integration
---

On this page you will find how to integrate our widget on a website that has a login system. 

This widget allows the user the option to contact with the doctors and be able to recover the conversation in the future. The user will be able to see all the conversations in the other SDK platforms (Android and iOS).

### Widget with patient session

This widget is initialized with the api key and a patient access token. The access token has to be generated through the [authentification api](/docs/sdk/widget/withsession/authentication). Once you have the two parameters you can use the init method:

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
  accessToken: "<USER-ACCESS-TOKEN>",
});
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
        apiKey: "<YOUR-API-KEY>",
        accessToken: "<USER-ACCESS-TOKEN>",
      });
    </script>
  </body>
</html>
```
