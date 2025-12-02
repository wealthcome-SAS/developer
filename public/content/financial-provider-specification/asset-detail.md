---
title: Get asset detailed information
description: Retrieve the detailed information of a specific financial asset by its identifier.
---

# Get asset detailed information

Retrieves the detailed information of a specific financial asset.

## Endpoint

```http
GET /v0/assets/{asset_id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `asset_id` | string | Yes | Identifier of the asset to retrieve (min 1 character) |

## Responses

### Success

**Code:** `200 OK`

**Content-Type:** `application/json`

```json
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
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the asset |
| `name` | string | No | Name of the asset |
| `BBAN` | string | No | Basic Bank Account Number |
| `IBAN` | string | No | International Bank Account Number (min 3 characters) |
| `reference` | string | No | Reference of the asset |
| `opened` | string | No | Contract opening date (date-time format) |
| `update.date` | string | No | Last update date of the asset (date-time format) |
| `beneficiaries` | array | No | List of identifiers of clients benefiting from this asset |

### Error

**Code:** `404 Not Found`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not found"
}
```