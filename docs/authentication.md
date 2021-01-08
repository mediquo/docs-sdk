---
id: authentication
title: Authentication
---

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
