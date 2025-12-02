---
title: The current valuation of an asset
description: Retrieve the current valuation of a financial asset.
---

# The current valuation of an asset

Retrieves the current valuation of an asset.

## Endpoint

```http
GET /v0/assets/{asset_id}/valuation_current
```

## Description

This call should return the current valuation of the asset.

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
  "date": "2025-01-01T00:00:00Z",
  "balance": {
    "value": 50000.00,
    "instrument": "EUR"
  }
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `date` | string | No | Date of the valuation (date-time format) |
| `balance` | object | No | Current balance/valuation |
| `balance.value` | number | Yes | Numeric value (float format) |
| `balance.instrument` | string | Yes | Financial instrument (EUR, BTC, AAPL, etc.) |

### Errors

**Code:** `404 Not Found`

Resource not found.

**Code:** `405 Method Not Allowed`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not available",
  "reason": "not_implemented"
}
```

**Possible values for `reason`:**
- `deleted`: The resource has been deleted
- `not_implemented`: The functionality is not implemented
- `too_early`: Too early to access this resource