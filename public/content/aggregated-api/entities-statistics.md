---
title: Entity — Entities list statistics
description: Retrieve statistics about entities for a specific company.
---

# Entities list statistics

Retrieves statistics about entities for a specific company.

## Endpoint

```http
GET /companies/{company-id}/entities/statistics
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
| `count` | integer | Yes | Total number of entities for the company |