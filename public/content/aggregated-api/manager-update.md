---
title: Manager — Update a manager
description: Update a manager by their ID.
---

# Update a manager

Updates a manager by their ID.

## Endpoint

```http
PATCH /companies/{company-id}/managers/{id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `id` | string | Yes | Unique identifier of the manager |

## Request Body

**Content-Type:** `application/json`

```json
{
  "name": "Jean dupont"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Updated name of the manager |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "name": "Jean dupont"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the updated manager |
| `name` | string | Yes | Name of the manager |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Manager not found"
}
```