---
title: List all transactions related to an asset
description: Retrieve the list of all transactions related to a specific asset. By default, only processed transactions are listed.
---

# List all transactions related to an asset

Retrieves the list of all transactions related to a specific asset.

## Endpoint

```http
GET /v0/assets/{asset_id}/transactions
```

## Description

By default, this call lists only processed transactions. This endpoint is paginated.

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
      "id": "string",
      "date": "2025-01-01T00:00:00Z",
      "amount": {
        "value": 1000.50,
        "instrument": "EUR"
      },
      "name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of transactions |
| `data[].id` | string | Yes | Unique identifier of the transaction |
| `data[].date` | string | Yes | Date of the transaction (date-time format) |
| `data[].amount` | object | Yes | Amount of the transaction |
| `data[].amount.value` | number | Yes | Numeric value (float format) |
| `data[].amount.instrument` | string | Yes | Financial instrument (EUR, BTC, AAPL, etc.) |
| `data[].name` | string | No | Name/description of the transaction |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

### Error

**Code:** `404 Not Found`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not found"
}
```

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.