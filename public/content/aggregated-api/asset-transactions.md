---
title: Assets — List asset transactions
description: List all transactions related to a specific asset.
---

# List asset transactions

Lists all transactions related to a specific asset.

## Endpoint

```http
GET /companies/{company-id}/assets/{asset_id}/transactions
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `asset_id` | string | Yes | Unique identifier of the asset (UUID format) |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | No | Retrieve transactions only after this date (ISO 8601 format) |
| `to` | string | No | Retrieve transactions only before this date (ISO 8601 format) |
| `processed_from` | string | No | Retrieve transactions processed only after this date (ISO 8601 format) |
| `processed_to` | string | No | Retrieve transactions processed only before this date (ISO 8601 format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "Payment for services",
    "date": "2024-03-15",
    "amount": 1250.5,
    "type": "payment",
    "processed": "2024-03-15T00:00:00.000Z",
    "manager": {
      "id": "string",
      "name": "Jean dupont"
    }
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the transaction (UUID format) |
| `name` | string | Yes | Name/description of the transaction |
| `date` | string | Yes | Transaction date (YYYY-MM-DD format) |
| `amount` | number | Yes | Transaction amount |
| `type` | string | Yes | Type of transaction |
| `processed` | string | Yes | Processing timestamp (ISO 8601 format) |
| `manager` | object | Yes | Information about the manager who processed the transaction |
| `manager.id` | string | Yes | Unique identifier of the manager (UUID format) |
| `manager.name` | string | Yes | Name of the manager |