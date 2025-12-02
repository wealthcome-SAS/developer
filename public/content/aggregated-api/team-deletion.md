---
title: Team — Team deletion
description: Delete a team.
---

# Team deletion

Deletes a team.

## Endpoint

```http
DELETE /companies/{company-id}/teams/{teamName}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `teamName` | string | Yes | Name of the team to delete |

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
| `name` | string | Yes | Name of the deleted team |
| `description` | string | Yes | Description of the deleted team |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Team not found"
}
```