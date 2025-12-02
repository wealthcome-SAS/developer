---
title: Get company detailed information
description: Retrieve the detailed information of a specific company by its identifier.
---

# Get company detailed information

Retrieves the detailed information of a specific company.

## Endpoint

```http
GET /v0/companies/{company_id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | string | Yes | Identifier of the company to retrieve (min 1 character) |

## Responses

### Success

**Code:** `200 OK`

**Content-Type:** `application/json`

```json
{
  "id": "string",
  "name": "string"
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the company |
| `name` | string | Yes | Name of the company |

### Error

**Code:** `404 Not Found`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not found"
}
```