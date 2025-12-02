---
title: List all assets
description: Retrieve the list of all available financial assets with cursor pagination.
---

# List all assets
{% heading %}
Retrieves the list of all financial assets.
{% /heading %}

## Endpoint

```http
GET /v0/assets
```

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "BBAN": "string",
      "IBAN": "string",
      "reference": "string",
      "opened": "2025-01-01T00:00:00Z",
      "update": {
        "date": "2025-01-01T00:00:00Z"
      },
      "beneficiaries": ["string"]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of assets |
| `data[].id` | string | Yes | Unique identifier of the asset |
| `data[].name` | string | No | Name of the asset |
| `data[].BBAN` | string | No | Basic Bank Account Number |
| `data[].IBAN` | string | No | International Bank Account Number (min 3 characters) |
| `data[].reference` | string | No | Reference of the asset |
| `data[].opened` | string | No | Contract opening date (date-time format) |
| `data[].update.date` | string | No | Last update date of the asset (date-time format) |
| `data[].beneficiaries` | array | No | List of identifiers of clients benefiting from this asset |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

## Pagination
{% callout type="info" title="Pagination" %}
This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.
{% /callout %}
