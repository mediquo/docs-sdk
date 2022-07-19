---
id: integration
title: Integration
---

On this page you will find how to integrate our widget for website that doesn't have a login system.

### Widget without session

The widget without session displays a form to the end user to register a temporal access to chat with the professionals. This access is limited for a span of time and then it will expire, future sessions will not keep the information and conversations of the previous ones. At any point the user can terminate his session by signin out.

The init method should contain at least these parameters. It cannot contain an access token, setting an access tokent would show a [Widget with patient session](/docs/sdk/widget/withsession/integration).

```js
MediquoWidget.init({
  apiKey: "<YOUR-API-KEY>",
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
        apiKey: "<YOUR-API-KEY>"
      });
    </script>
  </body>
</html>
```
