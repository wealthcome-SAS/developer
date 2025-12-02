---
title: Entity — List of entities
description: Retrieve a paginated list of entities for a specific company.
---

# List of entities

Retrieves a paginated list of entities for a specific company.

## Endpoint

```http
GET /companies/{company-id}/entities
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
| `creation_from` | string | No | Filter entities created after this date (ISO 8601 format) |
| `creation_to` | string | No | Filter entities created before this date (ISO 8601 format) |
| `updated_from` | string | No | Filter entities updated after this date (ISO 8601 format) |
| `updated_to` | string | No | Filter entities updated before this date (ISO 8601 format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "Jean dupont",
    "created": "2024-01-01T00:00:00.000Z",
    "updated": "2024-01-01T00:00:00.000Z",
    "general": {},
    "details": {},
    "type": "person",
    "assets": [],
    "providers": {}
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the entity (UUID format) |
| `name` | string | Yes | Name of the entity |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `updated` | string | Yes | Last update timestamp (ISO 8601 format) |
| `general` | object | Yes | General information about the entity |
| `details` | object | Yes | Detailed information about the entity |
| `type` | string | Yes | Type of the entity (e.g., "person") |
| `assets` | array | Yes | List of associated assets |
| `providers` | object | Yes | Provider-specific information |