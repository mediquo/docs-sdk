---
id: introduction
title: Introduction
---

On this page you will find how to integrate our widget to your website quickly and easily.

## Integration

In order to integrate the widget you will have to add the following script to your page.

```html
<script
  type="text/javascript"
  src="https://widget.mediquo.com/js/1.0.0/mediquo.js"
></script>
```

You will also have to initialize our widget with your Api Key. There are two options show the widget. 

If your users have a login on your website, you can show the widget with a different session for each user. With this setup your users will be able to recover their conversations in all the platforms. In case you don't have a user session, the widget can start a temporary session. In this case, the user will be able to access the widget with a temporary session.

The setup is different for each method, depending on your use case you can follow the instructions:

* You have a user with a login, configure [the permament session integration](withsession/integration).
* You want to show the widget to any person that is browsing your website. You can use the [temporal session setup](withoutsession/integration).
