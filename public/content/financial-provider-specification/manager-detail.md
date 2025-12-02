---
title: Get manager detailed information
description: Retrieve the detailed information of a specific manager by its identifier.
---

# Get manager detailed information

Retrieves the detailed information of a specific manager.

## Endpoint

```http
GET /v0/managers/{manager_id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `manager_id` | string | Yes | Identifier of the manager to retrieve (min 1 character) |

## Responses

### Success

**Code:** `200 OK`

**Content-Type:** `application/json`

```json
{
  "id": "string",
  "name": "string",
  "email": "user@example.com",
  "phone": "+33123456789",
  "companies": ["string"]
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the manager |
| `name` | string | Yes | Name of the manager |
| `email` | string | No | Email of the manager (email format) |
| `phone` | string | No | Phone of the manager (phone format) |
| `companies` | array | Yes | List of linked company identifiers |

### Error

**Code:** `404 Not Found`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not found"
}
```