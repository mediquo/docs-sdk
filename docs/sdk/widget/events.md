---
id: events
title: Widget Events
---

In order to keep track of whats happening within the widget and be able to handle certain cases, the widget publishes different events that can be listened to.

## Events

To listen the events published by the widget you can add the following event listener to your site. This events are sent by our widget iframe through the [Post Message API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

### Example

```html
<script>
  window.addEventListener("professionalIsUnavailable", (event) =>
    alert(`${event.detail.name} is not available`)
  );
</script>
```

In this example, we are listening to the `professionalIsUnavailable` and throwing an alert with their name.

### professionalIsUnavailable

In case that a professional is not available for the patient the widget will not allow to navigate to its room to chat and a small lock icon will appear on the cell. However in case that the patient tries to, an event to notify this will be fired. You can then handle what to show to the patient.

#### Payload
