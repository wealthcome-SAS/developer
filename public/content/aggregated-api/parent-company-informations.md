---
title: Parent Company — Retrieve the parent company information
description: Retrieve information about a specific parent company.
---

# Retrieve the parent company information

Retrieves information about a specific parent company.

## Endpoint

```http
GET /parent-companies/{parentCompanyID}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `parentCompanyID` | string | Yes | Unique identifier of the parent company (UUID format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "name": "Apple Paris",
  "created": "2024-01-01T00:00:00.000Z",
  "updated": "2024-01-01T00:00:00.000Z"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the parent company (UUID format) |
| `name` | string | Yes | Name of the parent company |
| `created` | string | Yes | Creation timestamp (ISO 8601 format) |
| `updated` | string | Yes | Last update timestamp (ISO 8601 format) |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Parent company not found"
}
```