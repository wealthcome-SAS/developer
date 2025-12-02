---
title: Team — Team member list
description: Retrieve the list of team members.
---

# Team member list

Retrieves the list of team members.

## Endpoint

```http
GET /companies/{company-id}/teams/{teamName}/members
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `teamName` | string | Yes | Name of the team |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offset` | integer | No | Number of items to skip (default: 0, minimum: 0) |
| `limit` | integer | No | Maximum number of items to return (default: 10, minimum: 1) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "name": "Jean dupont",
    "email": "jean.dupont@company.tld",
    "leader": true
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the team member (UUID format) |
| `name` | string | Yes | Name of the team member |
| `email` | string | Yes | Email address of the team member |
| `leader` | boolean | Yes | Whether the member is a team leader |