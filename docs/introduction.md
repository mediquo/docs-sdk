---
id: introduction
title: API Integration
sidebar_label: API Integration
---

This describes the resources that make up the official mediQuo API. If you have any problems or requests, please contact mediQuo Support.

## Using the mediQuo API

MediQuo API can be used to manage your patients in our platform and allow them to access your professionals in your SDK integration.

## How to get access to the mediQuo API

### Step 1: Apply and receive approval for your organization

To make any request to the mediQuo API, you must first [apply for an organization account](https://www.mediquo.com/en/companies/) and have your use case validated. Once validated, you will be provided with a set of credentials that you will use to authenticate all requests to the API.

### Step 2: Save your organization credentials and keep them secure

You will be provided with a set of credentials, an API key and a secret key. Those will be used to make requests in behalf of your organization. As these keys and tokens do not expire unless regenerated, we suggest creating environment variables, or using a secure password manager to store them safely.
As these keys and tokens do not expire unless regenerated, we suggest creating environment variables, or using a secure password manager to store them safely.

### Step 3: Set up your access

The majority of our endpoints require authentication with your organization credentials. Make sure to add the corresponding headers when making requests to our end. You can read more about [authentication](/docs/overview#authentication).

### Step 4: Ready to go

At this point you can start making requests to our end using the mediQuo API. You can check the [API Reference](/docs/overview)
