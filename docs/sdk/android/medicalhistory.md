---
id: medicalhistory
title: Medical history
sidebar_label: Medical history
---

This describes how to use **Medical history** module on your Android app.

## Introduction

If you are going to use this module, be sure to specify the Images and Downloads directories, required to download reports and prescriptions.

[Android documentation](https://developer.android.com/training/secure-file-sharing/setup-sharing?hl=es&authuser=1)

```xml
<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-path name="my_images" path="Android/data/YOUR_PACKAGE/files/Pictures" />
    <external-path name="downloads" path="Android/data/YOUR_PACKAGE/files/Download" />
</paths>
```

## Open Medical history with all sections
You need to provide a valid context to openMedicalHistory method.

```kotlin
...

MediquoSDK.getInstance()?.openMedicalHistory(this)

...
 ```

 ## Open a specific section
You need to provide a valid context to each method.

```kotlin
...

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

...
 ```