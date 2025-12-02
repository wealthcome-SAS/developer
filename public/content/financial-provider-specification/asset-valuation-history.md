---
title: The valuation in time of an asset
description: Retrieve the valuation history of an asset over time. By default, only processed valuations are listed.
---

# The valuation in time of an asset

Retrieves the valuation history of an asset over time.

## Endpoint

```http
GET /v0/assets/{asset_id}/valuation_history
```

## Description

By default, this call lists only processed valuations.

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
      "balance": {
        "value": 50000.00,
        "instrument": "EUR"
      }
    }
  ],
  "next": "string",
  "previous": "string"
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of valuations |
| `data[].date` | string | No | Date of the valuation (date-time format) |
| `data[].balance` | object | No | Balance/valuation at this date |
| `data[].balance.value` | number | Yes | Numeric value (float format) |
| `data[].balance.instrument` | string | Yes | Financial instrument (EUR, BTC, AAPL, etc.) |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

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

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.