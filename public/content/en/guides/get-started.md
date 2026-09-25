---
title: Getting Started
description: Get started with the Wealthcome APIs in a few steps
---

# Getting Started

This guide walks you through the first steps to use the Wealthcome APIs: getting a token, listing your companies, and retrieving your data.

## What you need

- A **role ID** and a **secret ID** — the credentials provided to you by Wealthcome (shared securely via 1Password)
- The base URL of the environment you target:
  - Production: `https://services.wealthcome.fr`
  - Preproduction: {% base-url /%}

{% callout type="info" title="Environment switcher" %}
The `{% base-url /%}` placeholder in this documentation automatically reflects the environment you selected in the top-right switcher.
{% /callout %}

## 1. Get an access token

Exchange your `roleID` and `secretID` for a short-lived bearer token:

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<your-roleID>",
    "secretID": "<your-secretID>"
  }'
```

The response contains a `token` you will pass as `Authorization: Bearer <token>` on every subsequent request.

## 2. List your companies

Use the token to list the companies your application can access:

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <your-token>"
```

## 3. Explore your data

Once you have a token and a company, you can start calling the data endpoints — contracts, customers, managers, and more.

## Where to go next

- [Get an access token](/docs/guides/get-token) — full details on authentication
- [List your companies](/docs/guides/list-companies) — companies endpoints
- [Get your non-archived contracts](/docs/guides/list-contracts) — contracts endpoints
- [Update a customer record](/docs/guides/update-customer) — writing data
- [Understand pagination](/docs/guides/pagination) — large result sets
- [Error codes](/docs/guides/error-codes) — handling failures
- [Support & Request ID](/docs/guides/support) — getting help
