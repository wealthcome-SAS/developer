---
title: Customer — Customer list statistics
description: Retrieve statistics about customers for a specific company.
---

# Customer list statistics

Retrieves statistics about customers for a specific company.

## Endpoint

```http
GET /companies/{company-id}/customers/statistics
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
| `count` | integer | Yes | Total number of customers for the company |