---
title: Assets — List assets
description: List all assets for a specific company.
---

# List assets

Lists all assets for a specific company.

## Endpoint

```http
GET /companies/{company-id}/assets
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
| `limit` | integer | No | Maximum number of items to return (default: 10, minimum: 1, maximum: 1000) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "string",
    "group": "banking",
    "management": "under",
    "distribution": [],
    "providers": {}
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the asset (UUID format) |
| `name` | string | Yes | Name of the asset |
| `group` | string | Yes | Asset group category |
| `management` | string | Yes | Management type |
| `distribution` | array | Yes | Distribution information |
| `providers` | object | Yes | Provider-specific information |