---
id: introduction
title: Getting Started
sidebar_label: Getting Started
---

This SDK offers the possibility of including the main functionalities of the mediQuo platform (professional list, chat, call, video call, medical history, reports and recipes) within your own apps or websites.
This documentation describes the steps to integrate these functionalities into a native Android or iOS application.

<kbd><img src="http://developer.mediquo.com/img/professional_list.jpg" alt="Professional list" height="190"/></kbd>
&nbsp;
<kbd><img src="http://developer.mediquo.com/img/chat.jpg" alt="Chat" height="190"/></kbd>
&nbsp;
<kbd><img src="http://developer.mediquo.com/img/videocall.jpg" alt="Call & Videcall" height="190"/></kbd>
&nbsp;
<kbd><img src="http://developer.mediquo.com/img/medical_history.jpg" alt="Medical History, Reports and Recipes" height="190"/></kbd>

## How to get access to the mediQuo SDK

### Step 1: Apply and receive approval for your organization

Before integrate the SDK, you must first [apply for an organization account](https://www.mediquo.com/en/companies/) and have your use case validated. Once validated, you will be provided with a set of credentials that will allow you to initialize the SDK.

### Step 2: Save your organization credentials and keep them secure

You will be provided with a set of credentials, an API key and a secret key.
Those will be used to make requests in behalf of your organization.
As these keys and tokens do not expire unless regenerated, we suggest creating environment variables, or using a secure password manager to store them safely.

### Step 3: Synchronize your patients using the SDK API

To authenticate your users in the SDK, you must first register them on our platform and send us their basic data (the minimum necessary for proper medical assistance) using the [SDK API](/docs/api/patients).

### Step 4: Integrate your SDK within you app or web

At this point you will be able to integrate properly the SDK within your apps following the steps described in the
[Android SDK documentation](/docs/sdk/android/introduction/)
, [iOS SDK documentation](/docs/sdk/ios/introduction/)
or [Web SDK documentation](/docs/sdk/widget/introduction/).
