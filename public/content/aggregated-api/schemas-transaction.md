---
title: Schemas — Transaction
description: JSON schema definition for Transaction objects.
---

# Transaction Schema

This schema defines the structure of a Transaction object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique identifier of the transaction",
      "example": "tx-123456-abcdef"
    },
    "name": {
      "type": "string",
      "description": "The name/description of the transaction",
      "example": "Payment for services"
    },
    "date": {
      "type": "string",
      "nullable": true,
      "description": "The date of the transaction",
      "example": "2024-03-15"
    },
    "amount": {
      "type": "number",
      "description": "The amount of the transaction (in EUR)",
      "example": 1250.5
    },
    "type": {
      "type": "string",
      "description": "The type of the transaction",
      "example": "payment"
    },
    "processed": {
      "type": "string",
      "description": "The date when the transaction was last processed by the system",
      "example": "2024-03-15T00:00:00.000Z"
    },
    "manager": {
      "type": "object",
      "nullable": true,
      "properties": {
        "id": {
          "type": "string",
          "example": "adfdfaca-48f0-4f3b-b30a-c6d97293090c"
        },
        "name": {
          "type": "string",
          "example": "Jean dupont"
        }
      },
      "description": "The manager linked to the transaction"
    }
  },
  "required": ["id", "name", "date", "amount", "type", "processed"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the transaction |
| `name` | string | Yes | The name/description of the transaction |
| `date` | string | Yes | The date of the transaction (nullable) |
| `amount` | number | Yes | The amount of the transaction (in EUR) |
| `type` | string | Yes | The type of the transaction |
| `processed` | string | Yes | The date when the transaction was last processed by the system (ISO 8601 format) |
| `manager` | object | No | The manager linked to the transaction (nullable) |
| `manager.id` | string | No | The unique identifier of the manager (UUID format) |
| `manager.name` | string | No | The name of the manager |