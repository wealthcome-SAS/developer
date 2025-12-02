---
title: Manager — Create a new manager
description: Create a new manager for a specific company.
---

# Create a new manager

Creates a new manager for a specific company.

## Endpoint

```http
POST /companies/{company-id}/managers
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
  "name": "Jean dupont",
  "email": "jean.dupont@company.tld",
  "claims": ["billing", "management"]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the manager |
| `email` | string | Yes | Email address of the manager |
| `claims` | array | Yes | List of claims/permissions for the manager |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "name": "Jean dupont",
  "email": "jean.dupont@company.tld",
  "claims": ["billing", "management"]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the created manager (UUID format) |
| `name` | string | Yes | Name of the manager |
| `email` | string | Yes | Email address of the manager |
| `claims` | array | Yes | List of claims/permissions assigned to the manager |

### Error Responses

**Code:** `400 Bad Request`

```json
{
  "message": "Invalid request data"
}
```