---
title: Team — Statistics of a team
description: Retrieve statistics for a specific team.
---

# Statistics of a team

Retrieves statistics for a specific team.

## Endpoint

```http
GET /companies/{company-id}/teams/{teamName}/statistics
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
  "customers": 10,
  "contracts": 10,
  "members": 10,
  "leaders": 10,
  "subordinate": 10
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `customers` | integer | Yes | Number of customers associated with the team |
| `contracts` | integer | Yes | Number of contracts associated with the team |
| `members` | integer | Yes | Total number of team members |
| `leaders` | integer | Yes | Number of team leaders |
| `subordinate` | integer | Yes | Number of subordinate members |