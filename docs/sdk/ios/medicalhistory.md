---
id: medicalhistory
title: Medical history
sidebar_label: Medical history
---

# Important!

The v1 version of the iOS SDK is **deprecated**, we highly recommend you to update to the latest version. Read the [changelog](/docs/sdk/ios/changelog) for more information.

## Medical history

Medical history includes all information shared between professionals and patients: Allergies, Illnesses, Medications, Reports, and Prescriptions.

## Open specific sections
Every section can be opened separately.  

```swift
// Allergies
let viewController = MediQuo.getAllergies()

// Diseases
let viewController = MediQuo.getDiseases()

// Medications
let viewController = MediQuo.getMedications()

// Reports
let viewController = MediQuo.getReports()

// Prescriptions
let viewController = MediQuo.getRecipes()
 ```

## Open all sections launcher
The SDK also includes a window with all the sections.

```swift
let viewController = MediQuo.getMedicalHistory()
 ```
 
<kbd>![Professional List](http://developer.mediquo.com/img/medical_history_ios.png "Professional List")</kbd>