---
title: Schemas — Team
description: JSON schema definition for Team objects.
---

# Team Schema

This schema defines the structure of a Team object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "example": "interns"
    },
    "description": {
      "type": "string",
      "example": "a team of interns"
    }
  },
  "required": ["name"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | string | Yes | The name of the team |
| `description` | string | No | The description of the team |