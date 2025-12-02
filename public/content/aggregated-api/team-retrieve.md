---
title: Team — Team retrieval
description: Retrieve information about a specific team.
---

# Team retrieval

Retrieves information about a specific team.

## Endpoint

```http
GET /companies/{company-id}/teams/{teamName}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `teamName` | string | Yes | Name of the team |

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
| `name` | string | Yes | Name of the team |
| `description` | string | Yes | Description of the team |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Team not found"
}
```