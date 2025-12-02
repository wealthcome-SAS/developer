---
title: Reference — Customer references list statistics
description: Retrieve statistics about customer references for a specific company.
---

# Customer references list statistics

Retrieves statistics about customer references for a specific company.

## Endpoint

```http
GET /companies/{company-id}/references/statistics
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
| `count` | integer | Yes | Total number of customer references for the company |