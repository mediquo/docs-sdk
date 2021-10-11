---
id: prescriptions
title: Prescriptions
---

Contains the information about prescriptions in the mediQuo ecosystem.

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

## Get prescription

```
POST /api/v1/prescriptions/{code}
```
Use this endpoint to retrieve the prescription information by its code.

### Endpoint URL

`https://sdk.mediquo.com/api/v1/prescriptions/{code}`

### Request parameters

No parameters

### Response fields

| Name            | Type   | Description                                           |
| --------------- | ------ | ----------------------------------------------------- |
| patient            | Patient | Patient information |
| patient.first_name | string  | Patient first name                       |
| patient.last_name  | string  | Patient last name                                     |
| patient.gender     | string  | Patient gender (`male` or `female`)                   |
| patient.birth_date | string  | Patient birth date (`Y-m-d`)                          |
| active_substances  | array   | Active substance names detailed in the prescription                                         |
| url                | string  | Download URL                                          |

### Default response

```json
Status: 200 OK
```

```json
{
  "data": {
    "patient": {
      "first_name": "John",
      "last_name": "Doe",
      "gender": "male",
      "birth_date": "1990-01-01"
    },
    "active_substances": [
      "Paracetamol",
      "Amoxicilina",
      "Loratadina"
    ],
    "download_url": "https://sdk.mediquo.com/api/v1/prescriptions/8da0198f-33fa-4dbf-8f50-bbefe6fe15c/download"
  }
}
```

## Download prescription PDF

```
POST /api/v1/prescriptions/{code}/download
```
Use this endpoint to download the prescription file in PDF format.

### Endpoint URL

`https://sdk.mediquo.com/api/v1/prescriptions/{code}/download`

### Response

```json
Status: 200 OK
Content type: application/pdf
```
