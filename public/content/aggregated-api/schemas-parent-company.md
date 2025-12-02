---
title: Schemas — Parent Company
description: JSON schema definition for Parent Company objects.
---

# Parent Company Schema

This schema defines the structure of a Parent Company object in the Aggregated API.

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
    },
    "created": {
      "type": "string",
      "nullable": true,
      "readOnly": true
    },
    "updated": {
      "type": "string",
      "nullable": true
    }
  },
  "required": ["id", "name", "created", "updated"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the parent company (UUID format) |
| `name` | string | Yes | The name of the parent company |
| `created` | string | Yes | The creation timestamp (ISO 8601 format, nullable, read-only) |
| `updated` | string | Yes | The last update timestamp (ISO 8601 format, nullable) |