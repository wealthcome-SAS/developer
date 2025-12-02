---
title: Schemas — Asset
description: JSON schema definition for Asset objects.
---

# Asset Schema

This schema defines the structure of an Asset object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique identifier of the asset",
      "example": "adfdfaca-48f0-4f3b-b30a-c6d97293090c"
    },
    "name": {
      "type": "string",
      "description": "The name of the asset",
      "example": "Jean dupont"
    },
    "group": {
      "type": "string",
      "enum": ["banking", "securities", "lifeInsurance_capitalization", "retirement_employee", "crowdfunding", "private_equity", "crypto", "benefits", "heritage_real_estate", "professional_real_estate", "commercial_real_estate", "other", "rock_paper", "exotic", "home_loan", "business_loan", "consumer_loan", "other_loan", "unrecognized"],
      "description": "The group of the asset",
      "example": "banking"
    },
    "management": {
      "type": "string",
      "enum": ["under", "none"],
      "description": "The management of the asset"
    },
    "distribution": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "ownership": {
            "type": "number"
          },
          "entityId": {
            "type": "string",
            "format": "uuid"
          }
        }
      },
      "description": "the distribution of ownership shares between entities"
    },
    "providers": {
      "type": "object",
      "nullable": true,
      "additionalProperties": {
        "type": "string"
      },
      "description": "Provider IDs associated with the asset"
    }
  },
  "required": ["id", "name", "group", "management", "distribution"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the asset (UUID format) |
| `name` | string | Yes | The name of the asset |
| `group` | string | Yes | The group of the asset (enum: banking, securities, lifeInsurance_capitalization, retirement_employee, crowdfunding, private_equity, crypto, benefits, heritage_real_estate, professional_real_estate, commercial_real_estate, other, rock_paper, exotic, home_loan, business_loan, consumer_loan, other_loan, unrecognized) |
| `management` | string | Yes | The management of the asset (enum: under, none) |
| `distribution` | array | Yes | The distribution of ownership shares between entities |
| `distribution[].ownership` | number | No | Ownership percentage |
| `distribution[].entityId` | string | No | Entity identifier (UUID format) |
| `providers` | object | No | Provider IDs associated with the asset (nullable) |