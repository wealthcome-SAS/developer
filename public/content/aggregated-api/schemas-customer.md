---
title: Schemas — Customer
description: JSON schema definition for Customer objects.
---

# Customer Schema

The Customer schema is complex, including personal information, contact details, etc.

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
    "created": {
      "type": "string",
      "description": "The date of creation of the customer"
    },
    "updated": {
      "type": "string",
      "description": "The date of the last update of the customer"
    },
    "general": {
      "type": "object"
    }
  },
  "required": ["id", "name", "created", "updated"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the customer (UUID format) |
| `name` | string | Yes | The name of the customer |
| `created` | string | Yes | The date of creation of the customer (ISO 8601 format) |
| `updated` | string | Yes | The date of the last update of the customer (ISO 8601 format) |
| `general` | object | No | General information about the customer (complex object) |