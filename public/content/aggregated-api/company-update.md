---
title: Company — Update a company information
description: Update information for a specific company.
---

# Update a company information

Updates information for a specific company.

## Endpoint

```http
PATCH /companies/{company-id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

## Request Body

**Content-Type:** `application/json`

```json
{
  "name": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the company (minimum 1 character) |

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
| `name` | string | Yes | Updated name of the company |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Company not found"
}
```