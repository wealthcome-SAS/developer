---
title: Assets — List asset investments
description: List all investments related to a specific asset.
---

# List asset investments

Lists all investments related to a specific asset.

## Endpoint

```http
GET /companies/{company-id}/assets/{asset_id}/investments
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |
| `asset_id` | string | Yes | Unique identifier of the asset (UUID format) |

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | No | Retrieve investments only after this date (ISO 8601 format) |
| `to` | string | No | Retrieve investments only before this date (ISO 8601 format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
[
  {
    "id": "string",
    "label": "APPLE INC",
    "unitPrice": 150.25,
    "unitValue": 155.75,
    "quantity": 100,
    "valuation": 15575,
    "instrument": "Stock",
    "category": "Equity",
    "subcategory": "Technology",
    "managementCompany": "BlackRock",
    "riskIndicator": "Moderate",
    "sri": "4"
  }
]
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the investment (UUID format) |
| `label` | string | Yes | Label/name of the investment |
| `unitPrice` | number | Yes | Unit price of the investment |
| `unitValue` | number | Yes | Current unit value of the investment |
| `quantity` | integer | Yes | Quantity of units held |
| `valuation` | number | Yes | Total valuation of the investment |
| `instrument` | string | Yes | Type of financial instrument |
| `category` | string | Yes | Investment category |
| `subcategory` | string | Yes | Investment subcategory |
| `managementCompany` | string | Yes | Name of the management company |
| `riskIndicator` | string | Yes | Risk indicator level |
| `sri` | string | Yes | SRI (Socially Responsible Investment) rating |