---
id: events
title: Events
---

In order to keep track of whats happening within the widget and be able to handle certain cases, the widget publishes different events that can be listened to.

## Events

To listen the events published by the widget you can add the following event listener to your site. This events are sent by our widget iframe through the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" target="_blank">Post Message Api</a>.

### Example

```html
<script>
  window.addEventListener(
    "message",
    ({ data: { command, detail } }) =>
      command === "professionalIsUnavailable" &&
      alert(`${detail.name} no está disponible`)
  );
</script>
```

In this example, we are listening to the event command `professionalIsUnavailable` and throwing an alert with their name.

### `professionalIsUnavailable`

In case that a professional is not available for the patient the widget will not allow to navigate to its room to chat and a small lock icon will appear on the cell. However in case that the patient tries to, an event to notify this will be fired. You can then handle what to show to the patient.

#### Detail

| Value             | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| name              | Professional name                                              |
| title             | Professional title                                             |
| avatar            | Professional avatar                                            |
| status            | The status of the professional: online or offline              |
| collegiate_number | The professional collegiate number                             |
| is_available      | Boolean that indicates if the professional is available or not |

### `consultations`

When number of pending consultations has changed an event with this number will be fired. You can then handle what to show to the patient.

#### Payload

| Value                | Description                     |
| -------------------- | ------------------------------- |
| pendingConsultations | Number of pending consultations |
