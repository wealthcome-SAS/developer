---
title: List your companies
description: Retrieve the list of companies your application can access
---

# List your companies

Once you have a token, you can list the companies your application is authorized to access.

## Request

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <your-token>"
```

## Response

The response is an array of companies:

```json
[
  {
    "id": "b50be977-c4cb-41ea-b5f8-589165f2ea28",
    "name": "Saint-Exupéry Patrimoine",
    "specific": null
  }
]
```

## Pagination

The endpoint supports pagination with `offset` and `limit` query parameters:

| Parameter | Type | Default | Maximum | Description |
|-----------|------|---------|---------|-------------|
| `offset` | number | `0` | — | Index of the first result to return |
| `limit` | number | `10` | `1000` | Number of results to return |

```bash
curl "{% base-url /%}/aggregated/companies?offset=0&limit=50" \
  -H "Authorization: Bearer <your-token>"
```

{% callout type="info" title="Parent companies" %}
If your company is a parent company, the response includes all its subsidiaries that your application is authorized to access.
{% /callout %}
