---
title: Get an access token
description: Authenticate your application and retrieve an access token to call the Wealthcome APIs
---

# Get an access token

All Wealthcome APIs require an access token in the `Authorization` header. This guide shows you how to obtain one using your API credentials.

## Prerequisites

- An API key (a `roleID` and a `secretID`), shared with you via 1Password
- The base URL of your environment (see the environment switcher at the top of this page)

## Step 1 — Call the token endpoint

Send a `POST` request to the token endpoint with your credentials:

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<your-roleID>",
    "secretID": "<your-secretID>"
  }'
```

## Step 2 — Read the response

A successful request returns an access token:

```json
{
  "token": "hvs.CAESI..."
}
```

## Step 3 — Use the token

Pass the token as a bearer token in every subsequent request:

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <your-token>"
```

{% callout type="info" title="Token lifetime" %}
Access tokens are short-lived. When you receive a `401` response, obtain a fresh token by repeating Step 1.
{% /callout %}

## Errors

| HTTP status | Meaning |
|-------------|---------|
| `401` | Invalid `roleID` or `secretID`. Check your credentials. |
| `403` | Your application is not authorized for this resource. |
