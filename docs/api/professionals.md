---
id: professionals
title: Professionals
---

Contains the information about Professionals in the mediQuo ecosystem.

### Authentication and rate limits

| Authentication                                | Rate limits             |
| --------------------------------------------- | ----------------------- |
| [HTTP Headers](/docs/overview#authentication) | 600 requests per minute |

Learn more about [rate limits](/docs/overview#rate-limiting).

### Attributes

| Name       | Type                      | Description                                                     |
| ---------- | ------------------------- | --------------------------------------------------------------- |
| hash       | string                    | MediQuo Professional identifier                                           |
| speciality_id  | string      | Professional speciality id                         |
| name        | string      | Professional full name  |
| avatar     | string                   | Professional avatar path                      |
| title   | string      | Professional title description, nice name for it's speciality |
| description | string | Professional profile description |
| status | string      | Professional status `online` or `offline` |
| collegiate_number | string **(optional)**   | Collegiate number for the professional |

## List Consultants

```
GET /v1/consultants
```

### Endpoint URL

`https://sdk.mediquo.com/v1/consultants`

### Query parameters

None

### Response fields

| Name       | Type    | Description                                                   |
| ---------- | ------- | ------------------------------------------------------------- |
| hash       | string                    | MediQuo Professional identifier                                           |
| speciality_id  | string      | Professional speciality id                         |
| name        | string      | Professional full name  |
| avatar     | string                   | Professional avatar path                      |
| title   | string      | Professional title description, nice name for it's speciality |
| description | string | Professional profile description |
| status | string      | Professional status `online` or `offline` |
| collegiate_number | string    | Collegiate number for the professional |

### Default response

```json
Status: 200 OK
```

```json
{
  "hash": "mediquo-internal-id",
  "speciality_id": "20",
  "name": "Dr. MediQuo Test",
  "avatar": "https://api.mediquo.com/path-to-avatar",
  "title": "General Medicine",
  "description": "My description",
  "status": "online",
  "collegiate_number": "123456A",
}
```