---
title: Parent Company — List parent companies
description: List all parent companies.
---

# List parent companies

Lists all parent companies.

## Endpoint

```http
GET /parent-companies
```

## Parameters

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | integer | No | Number of items to skip (default: 0, minimum: 0) |
| `limit` | integer | No | Maximum number of items to return (default: 10, minimum: 1, maximum: 1000) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "Apple Paris",
    "created": "2024-01-01T00:00:00.000Z",
    "updated": "2024-01-01T00:00:00.000Z"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the parent company (UUID format) |
| `name` | string | Yes | Name of the parent company |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `updated` | string | Yes | Last update timestamp (ISO 8601 format) |