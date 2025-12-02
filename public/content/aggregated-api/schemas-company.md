---
title: Schemas — Company
description: JSON schema definition for Company objects.
---

# Company Schema

This schema defines the structure of a Company object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "example": "adfdfaca-48f0-4f3b-b30a-c6d97293090c"
    },
    "name": {
      "type": "string",
      "example": "Apple Paris"
    }
  },
  "required": ["id", "name"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the company (UUID format) |
| `name` | string | Yes | The name of the company |