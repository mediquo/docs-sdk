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

## Report sent

This event is triggered when a professional sends a new report to a patient with the type `patient_report_sent`. The payload includes the next information:

| Key          | Type   | Values | Description                                                                       |
|--------------|--------|--------|-----------------------------------------------------------------------------------|
| type         | string | `soap` | Report type                                                                       |
| content      | object |        | Content of the report. The structure will depend on the report type.                     |
| patient.code | string |        | Patient code (Check out the [API patient specification](/docs/api/sdk/patients/)) |

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