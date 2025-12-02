---
title: The history of investments in an asset
description: Retrieve the investment history in a financial asset with cursor pagination.
---

# The history of investments in an asset

Retrieves the investment history in an asset.

## Endpoint

```http
GET /v0/assets/{asset_id}/investments_history
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `asset_id` | string | Yes | Identifier of the asset (min 1 character) |

## Responses

### Success

**Code:** `200 OK`

**Content-Type:** `application/json`

```json
{
  "data": [
    {
      "date": "2025-01-01T00:00:00Z",
      "state": [
        {
          "code": "US0378331005",
          "update": {
            "date": "2025-01-01T00:00:00Z"
          },
          "quantity": 10.5,
          "value": {
            "value": 1575.50,
            "instrument": "EUR"
          },
          "name": "Apple Inc.",
          "acquisition": {
            "date": "2024-01-01T00:00:00Z",
            "value": {
              "value": 1200.00,
              "instrument": "EUR"
            }
          }
        }
      ]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of investment states at different dates |
| `data[].date` | string | No | Date of the investment state (date-time format) |
| `data[].state` | array | No | List of investments at this date |
| `data[].state[].code` | string | Yes | Code of the investment |
| `data[].state[].update.date` | string | No | Last update date (date-time format) |
| `data[].state[].quantity` | number | Yes | Quantity of the investment (float format) |
| `data[].state[].value` | object | Yes | Valuation of the investment |
| `data[].state[].value.value` | number | Yes | Numeric value (float format) |
| `data[].state[].value.instrument` | string | Yes | Financial instrument |
| `data[].state[].name` | string | Yes | Name of the investment |
| `data[].state[].acquisition.date` | string | No | Acquisition date (date-time format) |
| `data[].state[].acquisition.value` | object | No | Valuation at acquisition |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

### Errors

**Code:** `404 Not Found`

Resource not found.

**Code:** `405 Method Not Allowed`

```json
{
  "message": "Resource not available",
  "reason": "not_implemented"
}
```

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.