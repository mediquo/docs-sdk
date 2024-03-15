---
id: webhooks
title: Webhooks
---

MediQuo SDK API is able to notify real-time data as soon as a specific event occurs via webhook. Notify the different URL(s) of our system to the MediQuo Support Team in order to configure the webhook HTTP request.

# Authentication

MediQuo SDK API will add the `x-webhook-signature` header as a custom HTTP header in order to provide a reliable signature for the HTTP request. The value attached to the header will be specified by the MediQuo support team.

| Header              | Type   |
|---------------------|--------|
| x-webhook-signature | string |

Inform to the MediQuo support team if you have other additional security methods to be configured in the HTTP request (Oauth, user/password, ...).

# Events

The events sent by the webhook will have the next payload structure.

| Key         | Type   | Description          |
|-------------|--------|----------------------|
| type        | string | Event type           |
| occurred_on | number | Event UNIX timestamp |
| payload     | object | Event payload        |

## Consultation finished

This event is triggered when a professional finishes a patient consultation with the type `patient_consultation_finished`. The payload includes the next information:

| Key                     | Type                          | Values | Description                                   |
|-------------------------|-------------------------------|--------|-----------------------------------------------|
| consultation            | [Consultation](#Consultation) |        | Consultation basic data.                      |
| reports                 | object                        |        | Reports created during the consultation       |
| patient                 | object                        |        | Consultation patient information              |
| patient.allergies       | array                         |        | Allergies in the patient's medical history    |
| patient.diseases        | array                         |        | Diseases in the patient's medical history     |
| patient.medications     | array                         |        | Medications in the patient's medical history  |
| professional            | object                        |        | Consultation professional information         |
| prescriptions           | array                         |        | Prescriptions created during the consultation |

### Example

```json
{
  "type": "patient_consultation_finished",
  "occurred_on": 1704063600,
  "payload": {
    "consultation": {
      "id": "id_consultation",
      "type": "appointment",
      "start_date": "2024-01-01T00:00:00",
      "end_date": "2024-01-01T01:00:00",
      "speciality": {
        "id": 1,
        "name": "Medicina General"
      }
    },
    "reports": [
      {
        "id": "report-1-id",
        "type": "soap",
        "content": {
          "subjective": "Patient-reported information, including the chief complaint, history of present illness, and a review of systems.",
          "objective": "Clinically observed and measured information, including vital signs and a physical exam.",
          "assessment": "The healthcare provider's assessment or diagnosis based on the subjective and objective information.",
          "plan": "The proposed plan of action, including medications, further tests, and follow-up instructions."
        }
      },
      {
        "id": "report-2-id",
        "type": "soap",
        "content": {
          "subjective": "Patient-reported information, including the chief complaint, history of present illness, and a review of systems.",
          "objective": "Clinically observed and measured information, including vital signs and a physical exam.",
          "assessment": "The healthcare provider's assessment or diagnosis based on the subjective and objective information.",
          "plan": "The proposed plan of action, including medications, further tests, and follow-up instructions."
        }
      }
    ],
    "patient": {
      "code": "patient_code",
      "allergies": [
        {
          "id": "allergy-1-id",
          "name": "allergy 1 name",
          "description": "allergy 1 description"
        },
        {
          "id": "allergy-2-id",
          "name": "allergy 2 name",
          "description": "allergy 2 description"
        }
      ],
      "diseases": [
        {
          "id": "disease-1-id",
          "name": "disease 1 name",
          "description": "disease 1 description"
        },
        {
          "id": "allergy-2-id",
          "name": "disease 2 name",
          "description": "disease 2 description"
        }
      ],
      "medications": [
        {
          "id": "medication-1-id",
          "name": "medication 1 name",
          "description": "medication 1 description",
          "posology": "medication 1 posology"
        },
        {
          "id": "medication-2-id",
          "name": "medication 2 name",
          "description": "medication 2 description",
          "posology": "medication 2 posology"
        }
      ]
    },
    "professional": {
      "id": "hash",
      "name": "professional name",
      "avatar": "https://image.url/"
    },
    "prescriptions": [
      {
        "id": "prescription-1-id",
        "active_substances": [
          "substance_1",
          "substance_2",
          "substance_3"
        ]
      },
      {
        "id": "prescription-1-id",
        "active_substances": [
          "substance_1",
          "substance_2",
          "substance_3"
        ]
      }
    ]
  }
}
```

## Report sent

This event is triggered when a professional sends a new report to a patient with the type `patient_report_sent`. The payload includes the next information:

| Key          | Type   | Values | Description                                                                     |
|--------------|--------|--------|---------------------------------------------------------------------------------|
| type         | string | `soap` | Report type                                                                     |
| content      | object |        | Content of the report. The structure will depend on the report type.                   |
| patient.code | string |        | Patient code (Check out the [API patient specification](/docs/api/patients)) |

### Example

```json
{
  "type": "patient_report_sent",
  "occurred_on": 1704063600,
  "payload": {
    "type": "soap",
    "content": {
      "subjective": "Patient-reported information, including the chief complaint, history of present illness, and a review of systems.",
      "objective": "Clinically observed and measured information, including vital signs and a physical exam.",
      "assessment": "The healthcare provider's assessment or diagnosis based on the subjective and objective information.",
      "plan": "The proposed plan of action, including medications, further tests, and follow-up instructions."
    },
    "patient": {
      "code": "patient_code"
    }
  }
}
```

## Models

### Consultation

| Key        | Type     | Values              | Description                                |
|------------|----------|---------------------|--------------------------------------------|
| id         | string   |                     | Consultation unique identifier.            |
| type       | string   | [appointment, chat] | Consultation type.                         |
| start_date | datetime |                     | Consultation start date in ISO8610 format. |
| end_date   | datetime |                     | Consultation end date in ISO8610 format.   |
| speciality | object   |                     | Consultation professional speciality.      |