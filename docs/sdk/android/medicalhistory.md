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

## Open a specific section
The Medical History module has 5 different sections that you can open separately: Allergies, Illnesses, Medications, Reports, and Prescriptions.  

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
If you prefer, the SDK also includes a window with all the sections

<kbd>![Professional List](http://developer.mediquo.com/img/medical_history.jpg "Professional List")</kbd>

```kotlin
MediquoSDK.getInstance()?.openMedicalHistory(this)
 ```