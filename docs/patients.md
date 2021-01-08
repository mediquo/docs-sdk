---
id: patients
title: Patients
---

Contains the information about a Patient in the mediQuo ecosystem.

## Patient object

### Attributes

| Name       | Type                  | Description                            |
| ---------- | --------------------- | -------------------------------------- |
| code       | string                | The value that identifies your patient |
| first_name | string                | Patient first name or full name        |
| last_name  | string **(optional)** | Patient last name                      |
| gender     | string                | Patient gender (`male` or `female`)    |
| birthdate  | string                | Patient birthdate                      |
| email      | string **(optional)** | Patient email                          |

## Create or update Patients

Use this endpoint to manage your patients by either creating new patients or updating existing ones. This method accepts creating and updating multiple patients at once by providing an array of the desired data.

```
PUT /v1/patients
```

### Endpoint URL

`https://sdk.mediquo.com/v1/patients`

### Authentication and rate limits

| Authentication                       | Rate limits             |
| ------------------------------------ | ----------------------- |
| [HTTP Headers](/docs/authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Request parameters

| Name     | Type                          | Description                          |
| -------- | ----------------------------- | ------------------------------------ |
| patients | array[[Patient](#attributes)] | List of patients to update or create |

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
  "data": [
    {
      "message": "Success"
    }
  ]
}
```
