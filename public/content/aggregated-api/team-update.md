---
title: Team — Team update
description: Update information for a specific team.
---

# Team update

Updates information for a specific team.

## Endpoint

```http
PATCH /companies/{company-id}/teams/{teamName}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `teamName` | string | Yes | Name of the team to update |

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
| `name` | string | Yes | Updated name of the team |
| `description` | string | Yes | Updated description of the team |

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
| `name` | string | Yes | Name of the updated team |
| `description` | string | Yes | Description of the updated team |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Team not found"
}
```