---
title: Company — Retrieve a company information
description: Retrieve detailed information about a specific company.
---

# Retrieve a company information

Retrieves detailed information about a specific company.

## Endpoint

```http
GET /companies/{company-id}
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
  "id": "string",
  "name": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the company (UUID format) |
| `name` | string | Yes | Name of the company |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Company not found"
}
```