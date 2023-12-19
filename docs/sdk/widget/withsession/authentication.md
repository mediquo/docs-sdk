---
id: authentication
title: Authentication
---

Each time that you want to display the widget you have to authenticate the patient to get an access token. You should not store the access token between sessions. This access token will be valid for 24h, after this period of time the token might be expired.


> The patient should be registered before trying to call the authenticate endpoint

## Authenticate flow
The flow you have to follow depends on whether you have already registered the patient or not.

In case you have not registered yet the patient you have to follow the first flow. Otherwise you can follow the second one.


### Register a patient, authenticate and show widget

Using the code that identifies your patient you can follow this steps to be able to render the widget:
1. Create the patient [(endpoint documentation)](/docs/api/patients/#create-or-update-patients)
2. Authenticate to get the `access_token` [(endpoint documentation)](/docs/api/patients/#authenticate)
3. Render the widget with the `api_key` and `access_token`

![First time flow](/img/auth_first_time.jpg)


### Authenticate and show widget
Once the patient is registered, you can render the widget using the code that identifies your patient following these steps:
1. Authenticate to get the `access_token` [(endpoint documentation)](/docs/api/patients/#authenticate)
2. Render the widget with the `api_key` and `access_token`

![Second time flow](/img/auth_second_time.jpg)
