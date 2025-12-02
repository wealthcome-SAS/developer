---
title: Company — List companies
description: Retrieve the list of all available companies with pagination.
---

# List companies

Retrieves the list of all available companies.

## Endpoint

```http
GET /companies
```

## Parameters

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | number | No | Number of items to skip (default: 0, minimum: 0) |
| `limit` | number | No | Number of items to return (default: 10, minimum: 1, maximum: 1000) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the company (UUID format) |
| `name` | string | Yes | Name of the company |

## Pagination

This endpoint uses offset pagination. Use the `offset` and `limit` parameters to control pagination.