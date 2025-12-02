---
title: Assets — Asset Information
description: Retrieve information about a specific asset.
---

# Asset Information

Retrieves information about a specific asset.

## Endpoint

```http
GET /companies/{company-id}/assets/{asset_id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `asset_id` | string | Yes | Unique identifier of the asset (UUID format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "name": "string",
  "group": "banking",
  "management": "under",
  "distribution": [],
  "providers": {}
}
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

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Asset not found"
}
```