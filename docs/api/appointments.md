---
id: appointments
title: Appointments
---

Contains the information about an appointment in the mediQuo ecosystem.

## Create appointment

```
POST /v1/appointments
```

Use this endpoint to integrate your appointments into our platform. Contact to the MediQuo support team in order to get the available professional codes for your organization.

A successful response will return the appointment URL. Your patient will be able to make the video call associated with the appointment by accessing this URL. 

### Endpoint URL

`https://sdk.mediquo.com/v1/appointments`

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Request parameters

| Name                  | Type   | Description                                    |
|-----------------------|--------|------------------------------------------------|
| appointment.code      | string | The appointment code.                          |
| appointment.starts_at | string | The appointment start date in ISO 8601 format. |
| patient.code          | string | The code of patient.                           |
| professional.hash     | string | The MediQuo professional code.                 |

#### Example request

```json
{
  "appointment": {
    "code": "your_appointment_code",
    "starts_at": "2024-01-23T15:12:27Z"
  },
  "patient": {
    "code": "your_patient_code"
  },
  "professional": {
    "hash": "mediquo_professional_code"
  }
}
```

### Response

| Code | Type                  | Description                                                                   |
|------|-----------------------|-------------------------------------------------------------------------------|
| 200  | string                | Everything worked as expected.                                                |
| 400  | string                | There was an error processing the request. Check the message in the response. |
| 403  | Forbidden             | The provided keys does not give permissions.                                  |
| 422  | Unprocessable Content | The request was not well-formed.                                              |
| 500  | Internal server error | An unexpected error occurred in server.                                        |

#### Example Response

| Name             | Type   | Description           |
|------------------| ------ |-----------------------|
| appointment.code | string | The appointment code. |
| appointment.url  | string | The appointment URL.  |


```json
Status: 200 OK
```

```json
{
  "data": {
    "appointment": {
      "code": "your_appointment_code",
      "url": "appointment_url"
    }
  }
}
```

## Update appointment

```
PUT /v1/appointments/{appointment_code}
```

Use this endpoint update your appointments into our platform.

The appointment URL will be renewed.

### Endpoint URL

`https://sdk.mediquo.com/v1/appointments/{appointment_code}`

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Request parameters

| Name                  | Type   | Description                                    |
|-----------------------|--------|------------------------------------------------|
| appointment.starts_at | string | The appointment start date in ISO 8601 format. |

#### Example request

```json
{
  "appointment": {
    "starts_at": "2024-01-23T15:12:27Z"
  }
}
```

### Response

| Code | Type                  | Description                                                                   |
|------|-----------------------|-------------------------------------------------------------------------------|
| 200  | string                | Everything worked as expected.                                                |
| 400  | string                | There was an error processing the request. Check the message in the response. |
| 403  | Forbidden             | The provided keys does not give permissions.                                  |
| 422  | Unprocessable Content | The request was not well-formed.                                              |
| 500  | Internal server error | An unexpected error occurred in server.                                        |

#### Example Response

| Name             | Type   | Description           |
|------------------| ------ |-----------------------|
| appointment.code | string | The appointment code. |
| appointment.url  | string | The appointment URL.  |


```json
Status: 200 OK
```

```json
{
  "data": {
    "appointment": {
      "code": "your_appointment_code",
      "url": "appointment_url"
    }
  }
}
```

## Cancel appointment

```
DELETE /v1/appointments/{appointment_code}
```

Use this endpoint to cancel your appointments into our platform.

### Endpoint URL

`https://sdk.mediquo.com/v1/appointments/{appointment_code}`

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Response

| Code | Type                  | Description                                                                   |
|------|-----------------------|-------------------------------------------------------------------------------|
| 200  | string                | Everything worked as expected.                                                |
| 400  | string                | There was an error processing the request. Check the message in the response. |
| 403  | Forbidden             | The provided keys does not give permissions.                                  |
| 500  | Internal server error | An unexpected error occurred in server.                                        |
