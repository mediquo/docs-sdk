---
id: messages
title: Messages
---

Contains the information about messages API in the mediQuo ecosystem.

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

## Send Message

```
POST /v1/messages
```

Use this endpoint to create new messages for your patients.

### Endpoint URL

`https://sdk.mediquo.com/v1/messages`

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Request parameters

| Name     | Type                          | Description      |
| -------- | ----------------------------- | ---------------- |
| text | string | The content of the message |
| type | string | Type of the message `welcome` |
| patient_code | string | The code of patient |
| sender_candidates | array **(optional)**| An array containing professional hashes that will send the message |

### Response fields

| Name            | Type   | Description                                           |
| --------------- | ------ | ----------------------------------------------------- |
| message             | string | Info message |

### Default response

```json
Status: 200 OK
```

```json
{
  "message": "Welcome message sent succesfully",
}
```