---
title: List all investments currently held in an asset
description: Retrieve the list of all investments currently held in a financial asset.
---

# List all investments currently held in an asset

Retrieves the list of all investments currently held in an asset.

## Endpoint

```http
GET /v0/assets/{asset_id}/investments
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
[
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
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes | Code of the investment |
| `update.date` | string | No | Last update date of the investment (date-time format) |
| `quantity` | number | Yes | Quantity of the investment (e.g.: 3 shares of US0378331005) (float format) |
| `value` | object | Yes | Valuation of the investment in another instrument (preferably a currency) |
| `value.value` | number | Yes | Numeric value (float format) |
| `value.instrument` | string | Yes | Financial instrument (EUR, BTC, AAPL, etc.) |
| `name` | string | Yes | Name of the investment |
| `acquisition.date` | string | No | Acquisition date of the investment (date-time format) |
| `acquisition.value` | object | No | Valuation of the investment at the time of acquisition |
| `acquisition.value.value` | number | No | Numeric value (float format) |
| `acquisition.value.instrument` | string | No | Financial instrument (EUR, BTC, AAPL, etc.) |

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