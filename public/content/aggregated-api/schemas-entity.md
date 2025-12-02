---
title: Schemas — Entity
description: JSON schema definition for Entity objects.
---

# Entity Schema

The Entity schema represents either a person or a company, with detailed information.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "readOnly": true
    },
    "name": {
      "type": "string",
      "readOnly": true
    },
    "created": {
      "type": "string",
      "nullable": true,
      "readOnly": true
    },
    "updated": {
      "type": "string",
      "readOnly": true
    },
    "general": {
      "anyOf": [
        {
          "type": "object"
        },
        {
          "type": "object"
        }
      ]
    },
    "details": {
      "type": "object",
      "nullable": true
    },
    "type": {
      "type": "string",
      "nullable": true,
      "enum": ["person", "company"]
    },
    "assets": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "ownership": {
            "type": "number"
          },
          "id": {
            "type": "string",
            "format": "uuid"
          }
        }
      }
    },
    "providers": {
      "type": "object",
      "nullable": true,
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "required": ["id", "name", "updated", "assets"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the entity (UUID format, read-only) |
| `name` | string | Yes | The name of the entity (read-only) |
| `created` | string | No | The creation timestamp (ISO 8601 format, nullable, read-only) |
| `updated` | string | Yes | The last update timestamp (ISO 8601 format, read-only) |
| `general` | object | No | General information about the entity |
| `details` | object | No | Detailed information about the entity (nullable) |
| `type` | string | No | Type of entity (enum: person, company, nullable) |
| `assets` | array | Yes | List of associated assets |
| `assets[].ownership` | number | No | Ownership percentage in the asset |
| `assets[].id` | string | No | Asset identifier (UUID format) |
| `providers` | object | No | Provider-specific information (nullable) |