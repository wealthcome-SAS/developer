---
title: Reference — Create a reference
description: Create a new reference for a specific company.
---

# Create a reference

Creates a new reference for a specific company.

## Endpoint

```http
PUT /companies/{company-id}/references
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

## Request Body

**Content-Type:** `application/json`

```json
{
  "companyId": "string",
  "tag": "VIP",
  "entities": [
    {
      "general": {},
      "referenceType": "customer"
    }
  ]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `companyId` | string | Yes | Unique identifier of the company (UUID format) |
| `tag` | string | Yes | Tag for the reference |
| `entities` | array | Yes | List of entities associated with the reference |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "companyId": "string",
  "created": "2024-01-01T00:00:00.000Z",
  "tag": "VIP",
  "entities": [],
  "access": []
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the created reference (UUID format) |
| `companyId` | string | Yes | Unique identifier of the company (UUID format) |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `tag` | string | Yes | Tag for the reference |
| `entities` | array | Yes | List of entities associated with the reference |
| `access` | array | Yes | Access permissions for the reference |

### Error Responses

**Code:** `400 Bad Request`

```json
{
  "message": "Invalid request data"
}
```