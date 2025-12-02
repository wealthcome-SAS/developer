---
title: Manager — List of managers
description: Retrieve a paginated list of managers for a specific company.
---

# List of managers

Retrieves a paginated list of managers for a specific company.

## Endpoint

```http
GET /companies/{company-id}/managers
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

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "name": "Jean dupont"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the manager |