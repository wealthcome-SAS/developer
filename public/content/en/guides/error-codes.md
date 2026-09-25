---
title: Error codes
description: Common HTTP error codes returned by the Wealthcome APIs
---

# Error codes

This page describes the common HTTP error codes you may encounter, and how to handle them.

## Status codes

| HTTP status | Name | Description |
|-------------|------|-------------|
| `200` | OK | The request succeeded. |
| `201` | Created | A resource was created. |
| `204` | No Content | The request succeeded, with no body returned. |
| `400` | Bad Request | The request is malformed. Check the parameters. |
| `401` | Unauthorized | Missing or invalid token. Re-authenticate. |
| `403` | Forbidden | The token is valid but your application lacks permission. |
| `404` | Not Found | The requested resource does not exist. |
| `409` | Conflict | The request conflicts with the current state. |
| `422` | Unprocessable Entity | The payload is syntactically valid but semantically invalid. |
| `429` | Too Many Requests | You exceeded the rate limit. Slow down. |
| `500` | Internal Server Error | An unexpected error occurred on our side. |
| `503` | Service Unavailable | The service is temporarily unavailable. |

## Error response format

Errors include a structured body:

```json
{
  "error": {
    "code": "CUSTOMER_NOT_FOUND",
    "message": "Customer customer-456 was not found"
  }
}
```

## Handling a 401

A `401` usually means your token expired. Request a new token:

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<your-roleID>",
    "secretID": "<your-secretID>"
  }'
```
