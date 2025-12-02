---
title: Reference — List of references
description: Retrieve a paginated list of references for a specific company.
---

# List of references

Retrieves a paginated list of references for a specific company.

## Endpoint

```http
GET /companies/{company-id}/references
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
| `creation_from` | string | No | Filter references created after this date (ISO 8601 format) |
| `creation_to` | string | No | Filter references created before this date (ISO 8601 format) |
| `type` | string | No | Filter to show only references containing prospects (enum: customer, prospect, relation) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "companyId": "string",
    "created": "2024-01-01T00:00:00.000Z",
    "tag": "VIP",
    "entities": [
      {
        "id": "string",
        "type": "customer"
      }
    ],
    "access": [
      {
        "managerId": "string",
        "primary": true
      }
    ]
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the reference (UUID format) |
| `companyId` | string | Yes | Unique identifier of the company (UUID format) |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `tag` | string | Yes | Tag for the reference |
| `entities` | array | Yes | List of entities associated with the reference |
| `entities[].id` | string | Yes | Unique identifier of the entity |
| `entities[].type` | string | Yes | Type of the entity |
| `access` | array | Yes | Access permissions for the reference |
| `access[].managerId` | string | Yes | Unique identifier of the manager |
| `access[].primary` | boolean | Yes | Whether this is the primary access |