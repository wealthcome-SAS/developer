---
title: Manager — Manager list statistics
description: Retrieve statistics about managers for a specific company.
---

# Manager list statistics

Retrieves statistics about managers for a specific company.

## Endpoint

```http
GET /companies/{company-id}/managers/statistics
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "count": 10
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `count` | integer | Yes | Total number of managers for the company |