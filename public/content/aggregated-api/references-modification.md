---
title: Reference — Update a reference
description: Update information for a specific reference.
---

# Update a reference

Updates information for a specific reference.

## Endpoint

```http
PATCH /companies/{company-id}/references/{reference-id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `reference-id` | string | Yes | Unique identifier of the reference (UUID format) |

## Request Body

**Content-Type:** `application/json`

```json
{
  "tag": "VIP",
  "entities": []
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `tag` | string | Yes | Updated tag for the reference |
| `entities` | array | Yes | Updated list of entities associated with the reference |

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
| `id` | string | Yes | Unique identifier of the updated reference (UUID format) |
| `companyId` | string | Yes | Unique identifier of the company (UUID format) |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `tag` | string | Yes | Tag for the reference |
| `entities` | array | Yes | List of entities associated with the reference |
| `access` | array | Yes | Access permissions for the reference |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Reference not found"
}
```