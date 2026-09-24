---
title: Get your non-archived contracts
description: Retrieve the list of your non-archived contracts
---

# Get your non-archived contracts

This guide shows you how to retrieve the contracts that are still active (not archived).

## 1. Get a token

See [Get an access token](/docs/guides/get-token) if you don't have a token yet.

## 2. List your companies

First, identify the company you want to inspect:

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <your-token>"
```

Take note of the company `id` from the response.

## 3. Retrieve the contracts

Call the company contracts endpoint with the `archived=false` filter:

```bash
curl "{% base-url /%}/aggregated/companies/<company-id>/contracts?archived=false" \
  -H "Authorization: Bearer <your-token>"
```

## Response

```json
{
  "items": [
    {
      "id": "contract-123",
      "label": "Assurance-vie",
      "archived": false
    }
  ]
}
```

{% callout type="warning" title="Archived filter" %}
The `archived` filter is optional. When omitted, archived contracts are included by default. Always pass `archived=false` to exclude them.
{% /callout %}
