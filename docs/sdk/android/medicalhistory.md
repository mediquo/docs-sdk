---
id: medicalhistory
title: Medical history
sidebar_label: Medical history
---

Medical history includes all information shared between professionals and patients: Allergies, Illnesses, Medications, Reports, and Prescriptions.

## Prerequisites

In order to use Reports and Prescriptions you must declare _Images_ and _Downloads_ directories in _res/xml/filepaths.xml_. See [the official Google documentation](https://developer.android.com/training/secure-file-sharing/setup-sharing?hl=es&authuser=1) for more information.

```xml
<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-path name="my_images" path="Android/data/YOUR_PACKAGE/files/Pictures" />
    <external-path name="downloads" path="Android/data/YOUR_PACKAGE/files/Download" />
</paths>
```

## Open specific sections
Every section can be opened separately.  

```kotlin
// Allergies
MediquoSDK.getInstance()?.openAllergiesActivity(this)

// Diseases
MediquoSDK.getInstance()?.openDiseasesActivity(this)

// Medications
MediquoSDK.getInstance()?.openMedicationsActivity(this)

// Reports
MediquoSDK.getInstance()?.openReportsActivity(this)

// Prescriptions
MediquoSDK.getInstance()?.openPrescriptionsActivity(this)
 ```

## Open Medical history with all sections
The SDK also includes a window with all the sections.

```kotlin
MediquoSDK.getInstance()?.openMedicalHistory(this)
 ```

<kbd>![Professional List](http://developer.mediquo.com/img/medical_history.jpg "Professional List")</kbd>