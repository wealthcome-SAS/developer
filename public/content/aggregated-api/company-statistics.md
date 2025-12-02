---
title: Company — Retrieve list companies statistics
description: Retrieve statistics about the list of companies.
---

# Retrieve list companies statistics

Retrieves statistics about the list of companies.

## Endpoint

```http
GET /companies/statistics
```

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
| `count` | number | Yes | Total number of companies (minimum: 0) |