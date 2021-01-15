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

The mediQuo API uses API keys to authenticate requests. This credentials will be provided by mediQuo once your organization is validated in our platform.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via HTTP headers and the following headers must be provided:

| Header key   | Value                   |
| ------------ | ----------------------- |
| X-API-Key    | The provided API Key    |
| X-Secret-Key | The provided Secret Key |

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

```
curl https://sdk.mediquo.com/v1/patients \
  -H "X-API-Key: <Your API Key>"
  -H "X-Secret-Key: <Your Secret Key>"
```

## Rate limiting

To help manage the sheer volume of these requests, limits are placed on the number of requests that can be made. These limits help us provide the reliable and scalable API.

The maximum number of requests that are allowed is based on a time interval and ip. Use the HTTP response headers in order to understand where the application is at for a given rate limit, on the method that was just utilized.

- `x-ratelimit-limit`: the rate limit ceiling for that given endpoint (600 requests per minute)
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

### Example error response

```json
Status: 404 Not found
```

```json
{
  "message": "Not found"
}
```
