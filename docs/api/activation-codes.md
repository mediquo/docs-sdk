---
id: activation-codes
title: Activation Codes
---

Contains the information about Activation Codes in the mediQuo ecosystem.

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Attributes

| Name               | Type                  | Description                                                                                                                                     |
|--------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| code               | string                | The activation code                                                                                                                             |
| plan_name          | string **(optional)** | The plan name of your activation code                                                                                                           |
| tag                | string **(optional)** | The value that identifies your activation code in your system                                                                                   |
| active             | boolean               | If the activation code is active or not                                                                                                         |
| duration           | string **(optional)** | The type of duration. `forever` it last forever (default value). `limited` last the number of months set in the `duration_in_months` parameter. |
| duration_in_months | int **(optional)**    | The number of months that the subscription will last (with `duration = limited`)                                                                |
| expires_at         | string **(optional)** | The date when the activation code will be unavailable (`Y-m-d`)                                                                                 |
| max_redemptions    | int **(optional)**    | The number of times an activation code can be used (1 time by default)                                                                          |
| meta               | string **(optional)** | Free text field (it can be a `JSON` structure)                                                                                                  |

## Create Activation Code

```
POST /v1/activation-codes
```

### Endpoint URL

`https://sdk.mediquo.com/v1/activation-codes`

### Request parameters

| Name               | Type                  | Description                                                                                                                                     |
|--------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| code               | string                | The code that the user will introduce                                                                                                           |
| plan_name          | string **(optional)** | The plan name of your activation code                                                                                                           |
| tag                | string **(optional)** | The value that identifies your activation code in your system                                                                                   |
| duration           | string **(optional)** | The type of duration. `forever` it last forever (default value). `limited` last the number of months set in the `duration_in_months` parameter. |
| duration_in_months | int **(optional)**    | The number of months that the subscription will last (with `duration = limited`)                                                                |
| expires_at         | string **(optional)** | The date when the activation code will be unavailable (`Y-m-d`)                                                                                 |
| max_redemptions    | int **(optional)**    | The number of times an activation code can be used (1 time by default)                                                                          |
| meta               | string **(optional)** | Free text field                                                                                                                                 |

#### Example request

```json
{
  "code": "MYTESTCODE123",
  "tag": "2020123ABC",
  "duration": "limited",
  "duration_in_months": 3
}
```

### Response fields

| Name    | Type   | Description      |
| ------- | ------ | ---------------- |
| message | string | Response message |

### Default response

```json
Status: 200 OK
```

```json
{
  "message": "Success"
}
```

## Get Activation Codes

```
GET /v1/activation-codes
```

Use this endpoint to retrieve activation codes. Can be filtered with query params for the given tag.

### Endpoint URL

`https://sdk.mediquo.com/v1/activation-codes`

### Query parameters

| Name          | Type     | Allowed values     | Description                                                                                    |
|---------------|----------|--------------------|------------------------------------------------------------------------------------------------|
| code          | string   |                    | The activation code                                                                            |
| tag           | string   |                    | The value that identifies your activation code in your system                                  |
| status        | string   | `active`,`expired` | Activation code status                                                                         |
| created_at_gt | datetime |                    | It will return activation codes created after the date (ISO8601 format: YYYY-MM-DDTHH:MM:SSZ)  |
| created_at_lt | datetime |                    | It will return activation codes created before the date (ISO8601 format: YYYY-MM-DDTHH:MM:SSZ) |
| page          | integer  |                    | Result page                                                                                    |

### Response fields

| Name                       | Type     | Nullable | Description                                                   |
|----------------------------|----------|----------|---------------------------------------------------------------|
| code                       | string   | No       | The activation code                                           |
| plan_name                  | string   | Yes      | The activation code plan name                                 |
| tag                        | string   | Yes      | The value that identifies your activation code in your system |
| active                     | boolean  | No       | If the activation code is active or not                       |
| emails.last_email          | string   | Yes      | The email account where the activation code was sent          |
| messages.last_phone_number | string   | Yes      | The phone number where the activation code was sent           |
| messages.last_phone_prefix | string   | Yes      | Previous phone prefix                                         |
| created_at                 | datetime | No       | The creation date of the activation code                      |
| meta                       | string   | Yes      | Free text field                                               |
| redemptions                | array    | No       | Patients who have redeemed the code                           |

### Default response

```json
Status: 200 OK
```

```json
{
  "code": "MYTESTCODE123",
  "plan_name": "premium",
  "tag": "2020123ABC",
  "active": true,
  "messages": {
    "last_phone_number": "766000000",
    "last_phone_prefix": "34"
  },
  "redemptions": [
    {"first_name": "first_name1", "last_name": "last_name1"},
    {"first_name": "first_name2", "last_name": "last_name2"}
  ],
  "emails": {
    "last_email": "foo@bar.com"
  },
  "meta": null
}
```

## Activate Activation Code

```
PUT /v1/activation-codes/<code>/activate
```

Use this endpoint to reactivate an activation code

### Endpoint URL

`https://sdk.mediquo.com/v1/activation-codes/<code>/activate`

### Request parameters

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| code | string | Activation code |

### Response fields

| Name    | Type   | Description      |
| ------- | ------ | ---------------- |
| message | string | Response message |

### Default response

```json
Status: 200 OK
```

```json
{
  "message": "Success"
}
```

## Deactivate Activation Code

```
PUT /v1/activation-codes/<code>/deactivate
```

Use this endpoint to deactivate an activation code.

### Endpoint URL

`https://sdk.mediquo.com/v1/activation-codes/<code>/deactivate`

### Request parameters

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| code | string | Activation code |

### Response fields

| Name    | Type   | Description      |
| ------- | ------ | ---------------- |
| message | string | Response message |

### Default response

```json
Status: 200 OK
```

```json
{
  "message": "Success"
}
```
## Send Activation Code

```
PUT /v1/activation-codes/<code>/send
```

Use this endpoint to send a notification to the user with the generated activation code. This will send an email and/or an SMS depending of the information you provided in the request.

> This endpoint by default is disabled. To be able to use it, you should request access to your mediQuo account manager

The endpoint will succeed if any of the provided channels for communication delivers the message, it will fail with error messages if both channels are unavailable and the message could not be sent.

### Endpoint URL

`https://sdk.mediquo.com/v1/activation-codes/<code>/send`

### Request parameters

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| name | string | Patient name |
| prefix | string **(required if phone is set)** | Patient prefix (`+34`) |
| phone | string **(required if prefix is set)** | Patient phone |
| email | string **(optional)** | Patient email |
| language | string **(optional)** | Language of message (only for email). Accepted languages 'es', 'en', 'pt , 'de'. Default: 'es' |

### Response fields

| Name    | Type   | Description      |
| ------- | ------ | ---------------- |
| message | string | Response message |

### Default response

```json
Status: 200 OK
```
```json
{
  "data": {
    "sms": "delivered",
    "email": "delivered",
  }
}
```