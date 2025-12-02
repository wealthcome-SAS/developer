---
title: Team — Team list statistics
description: Retrieve statistics about teams for a specific company.
---

# Team list statistics

Retrieves statistics about teams for a specific company.

## Endpoint

```http
GET /companies/{company-id}/teams/statistics
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
| `count` | integer | Yes | Total number of teams for the company |