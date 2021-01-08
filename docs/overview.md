---
id: overview
title: Overview
---

All API access is over HTTPS, and accessed from https://sdk.mediquo.com/v1. All data is sent and received as JSON.

Blank fields are included as null instead of being omitted.

All timestamps return in ISO 8601 format:

```
YYYY-MM-DDTHH:MM:SSZ
```

## Authentication

You can read more about [authentication](/docs/authentication).

## Pagination

Pagination is a feature in mediquo API endpoints that return more results than can be returned in a single response. When that happens, the data is returned in a series of 'pages'. Pagination refers to methods for programatically requesting all of the pages, in order to retrieve the entire result data set. Not all API endpoints support or require pagination, but it is often used when result sets are large.

To iterate between the result pages simply add on your query params the page you need.

```
curl https://sdk.mediquo.com/v1/patients?page=<Page Number>
```

## Rate limiting

To help manage the sheer volume of these requests, limits are placed on the number of requests that can be made. These limits help us provide the reliable and scalable API.

The maximum number of requests that are allowed is based on a time interval and ip. Use the HTTP response headers in order to understand where the application is at for a given rate limit, on the method that was just utilized.

- `x-ratelimit-limit`: the rate limit ceiling for that given endpoint
- `x-ratelimit-remaining`: the number of requests left for time scope window

## Client errors

MediQuo uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, permission denied, etc.). Codes in the 5xx range indicate an error with mediQuo's servers.

Some 4xx errors that could be handled programmatically (e.g., a parameter is required) include an error message that briefly explains the error reported.

- **200 - OK** Everything worked as expected.
- **400 - Bad Request** The request was unacceptable.
- **401 - Unauthorized** No valid API key provided.
- **403 - Forbidden** The API key doesn't have permissions to perform the request.
- **404 - Not Found** The requested resource doesn't exist.
- **422 - Unprocessable Entity** Usually validation errors.
- **429 - Too Many Requests** Too many requests hit the API too quickly.
- **500, 502, 503, 504 - Server Errors** Something went wrong on mediQuo's end.