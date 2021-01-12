---
id: patients
title: Patients
---

Contains the information about a Patient in the mediQuo ecosystem.

## Patient object

### Attributes

| Name       | Type                  | Description                                           |
| ---------- | --------------------- | ----------------------------------------------------- |
| code       | string                | The value that identifies your patient in your system |
| first_name | string                | Patient first name or full name                       |
| last_name  | string **(optional)** | Patient last name                                     |
| gender     | string                | Patient gender (`male` or `female`)                   |
| birth_date | string                | Patient birth date (`Y-m-d`)                          |
| email      | string **(optional)** | Patient email                                         |

## Create or update Patients

```
PUT /v1/patients
```

Use this endpoint to integrate your patients into our platform. You can bulk many patients at once but keep in mind that we limit up to **100 patients per request**.

You must provide a unique code for each patient that we will use to identify you patients. This way if you want to update the information of a given user, you simply request it again with it's code and the new data. The operation will either create or update a patient by the code you provide us.

In case many patients are provided, **the operation will either success or fail as a whole**, meaning that in case of an error, no patients will be created or updated unless the response code is not in the 2xx range.

Since the endpoint handles the data asyncronally, it is possible that there is a **small delay between the request and the data being available**.

### Endpoint URL

`https://sdk.mediquo.com/v1/patients`

### Authentication and rate limits

| Authentication                       | Rate limits             |
| ------------------------------------ | ----------------------- |
| [HTTP Headers](/docs/authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Request parameters

| Name     | Type                          | Description      |
| -------- | ----------------------------- | ---------------- |
| patients | array[[Patient](#attributes)] | List of patients |

#### Example request

```json
{
  "patients": [
    {
      "code": "dcb70f10-bafe-4a43-af99-8c86c61aa68d",
      "first_name": "John",
      "last_name": "Doe",
      "gender": "male",
      "birth_date": "1980-01-01",
      "email": "john@doe.com"
    },
    {
      "code": "jane-unique-id",
      "first_name": "Jane",
      "gender": "female",
      "birth_date": "1980-01-01"
    }
  ]
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
  "data": [
    {
      "message": "Success"
    }
  ]
}
```

You can read more about [client errors](/docs/overview#client-errors) for more information about other responses.
