---
title: Customer — List of customers
description: Retrieve a paginated list of customers for a specific company.
---

# List of customers

Retrieves a paginated list of customers for a specific company.

:::callout{type="warning"}
**Note:** This endpoint is deprecated.
:::

## Endpoint

```http
GET /companies/{company-id}/customers
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | integer | No | Number of items to skip (default: 0, minimum: 0) |
| `limit` | integer | No | Maximum number of items to return (default: 10, minimum: 1) |
| `creation_from` | string | No | Filter customers created after this date (ISO 8601 format) |
| `creation_to` | string | No | Filter customers created before this date (ISO 8601 format) |
| `updated_from` | string | No | Filter customers updated after this date (ISO 8601 format) |
| `updated_to` | string | No | Filter customers updated before this date (ISO 8601 format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "string",
    "created": "2024-01-01T00:00:00.000Z",
    "updated": "2024-01-01T00:00:00.000Z"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the customer (UUID format) |
| `name` | string | Yes | Name of the customer |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `updated` | string | Yes | Last update timestamp (ISO 8601 format) |