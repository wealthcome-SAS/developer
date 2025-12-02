---
title: Team — Team creation
description: Create a new team for a specific company.
---

# Team creation

Creates a new team for a specific company.

## Endpoint

```http
PUT /companies/{company-id}/teams
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
  "name": "interns",
  "description": "a team of interns"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the team |
| `description` | string | Yes | Description of the team |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "name": "interns",
  "description": "a team of interns"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the created team |
| `description` | string | Yes | Description of the created team |

### Error Responses

**Code:** `400 Bad Request`

```json
{
  "message": "Invalid request data"
}
```