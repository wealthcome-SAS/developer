---
title: Schemas — Investment
description: JSON schema definition for Investment objects.
---

# Investment Schema

This schema defines the structure of an Investment object in the Aggregated API.

## Schema Definition

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid",
      "description": "The unique identifier of the investment",
      "example": "inv-123456-abcdef"
    },
    "label": {
      "type": "string",
      "description": "The label/name of the investment",
      "example": "APPLE INC"
    },
    "unitPrice": {
      "type": "number",
      "description": "The price per unit",
      "example": 150.25
    },
    "unitValue": {
      "type": "number",
      "description": "The current value per unit",
      "example": 155.75
    },
    "quantity": {
      "type": "number",
      "description": "The number of units held",
      "example": 100
    },
    "valuation": {
      "type": "number",
      "description": "The total valuation of the investment",
      "example": 15575
    },
    "instrument": {
      "type": "string",
      "description": "The type of investment instrument",
      "example": "Stock"
    },
    "category": {
      "type": "string",
      "description": "The investment category",
      "example": "Equity"
    },
    "subcategory": {
      "type": "string",
      "description": "The investment subcategory",
      "example": "Technology"
    },
    "managementCompany": {
      "type": "string",
      "description": "The company managing the investment",
      "example": "BlackRock"
    },
    "riskIndicator": {
      "type": "string",
      "description": "Risk indicator of the investment",
      "example": "Moderate"
    },
    "sri": {
      "type": "string",
      "description": "Synthetic Risk Indicator",
      "example": "4"
    }
  },
  "required": ["id", "label", "unitPrice", "unitValue", "quantity", "valuation", "instrument", "category", "subcategory", "managementCompany", "riskIndicator", "sri"]
}
```

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the investment (UUID format) |
| `label` | string | Yes | The label/name of the investment |
| `unitPrice` | number | Yes | The price per unit |
| `unitValue` | number | Yes | The current value per unit |
| `quantity` | number | Yes | The number of units held |
| `valuation` | number | Yes | The total valuation of the investment |
| `instrument` | string | Yes | The type of investment instrument |
| `category` | string | Yes | The investment category |
| `subcategory` | string | Yes | The investment subcategory |
| `managementCompany` | string | Yes | The company managing the investment |
| `riskIndicator` | string | Yes | Risk indicator of the investment |
| `sri` | string | Yes | Synthetic Risk Indicator |