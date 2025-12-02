---
title: Team — Team Member Add
description: Add managers to a team.
---

# Team Member Add

Adds managers to a team.

## Endpoint

```http
PUT /companies/{company-id}/teams/{teamName}/members
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `teamName` | string | Yes | Name of the team |

## Request Body

**Content-Type:** `application/json`

```json
[
  {
    "managerId": "string",
    "leader": true
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `managerId` | string | Yes | Unique identifier of the manager to add (UUID format) |
| `leader` | boolean | Yes | Whether the manager should be a team leader |

## Response

**Code:** `204 No Content`

**Description:** Manager added to the team successfully

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Team not found"
}
```

**Code:** `400 Bad Request`

```json
{
  "message": "Invalid request data"
}
```