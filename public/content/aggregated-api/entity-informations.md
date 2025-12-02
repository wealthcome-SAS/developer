---
title: Entity — Get entity information
description: Retrieve detailed information about a specific entity.
---

# Get entity information

Retrieves detailed information about a specific entity.

## Endpoint

```http
GET /companies/{company-id}/entities/{entityID}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `entityID` | string | Yes | Unique identifier of the entity (UUID format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
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

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Entity not found"
}
```