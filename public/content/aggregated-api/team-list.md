---
title: Team — Team list
description: Retrieve the list of teams for a specific company.
---

# Team list

Retrieves the list of teams for a specific company.

## Endpoint

```http
GET /companies/{company-id}/teams
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

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
    "name": "interns",
    "description": "a team of interns"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | Name of the team |
| `description` | string | Yes | Description of the team |