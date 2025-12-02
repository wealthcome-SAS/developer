---
title: Schemas — Manager
description: JSON schema definition for Manager objects.
---

# Manager Schema

This schema defines the structure of a Manager object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "example": "adfdfaca-48f0-4f3b-b30a-c6d97293090c"
    },
    "name": {
      "type": "string",
      "example": "Jean dupont"
    },
    "email": {
      "type": "string",
      "example": "jean.dupont@company.tld"
    }
  },
  "required": ["id", "name", "email"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the manager (UUID format) |
| `name` | string | Yes | The name of the manager |
| `email` | string | Yes | The email address of the manager |