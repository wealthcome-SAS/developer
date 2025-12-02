---
title: Schemas
description: Definition of data schemas used in the Financial Provider Specification API.
---

# Schemas

This section describes the data schemas used in the API.

## cursor_paginated

Cursor pagination schema used for paginated lists.

```json
{
  "data": [],
  "next": "string",
  "previous": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | Yes | Array containing the data |
| `next` | string | Yes | Cursor for the next page (min 1 character) |
| `previous` | string | No | Cursor for the previous page (min 1 character) |

## company

Represents a company.

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (min 1 character) |
| `name` | string | Yes | Name of the company (min 1 character) |

## manager

Represents a manager.

```json
{
  "id": "string",
  "name": "string",
  "email": "user@example.com",
  "phone": "+33123456789",
  "companies": ["string"]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `name` | string | Yes | Name of the manager (min 1 character) |
| `email` | string | No | Email address (email format) |
| `phone` | string | No | Phone number (phone format) |
| `companies` | array | Yes | List of company identifiers (min 1 character per ID) |

## contract

Represents a contract.

```json
{
  "id": "string",
  "name": "string",
  "managers": ["string"],
  "customers": ["string"],
  "assets": ["string"]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (min 1 character) |
| `name` | string | No | Name of the contract (min 1 character) |
| `managers` | array | No | List of identifiers of managers linked to the contract |
| `customers` | array | No | List of identifiers of customers linked to the contract |
| `assets` | array | Yes | List of identifiers of assets linked to the contract |

## asset

Represents a financial asset.

```json
{
  "id": "string",
  "name": "string",
  "BBAN": "string",
  "IBAN": "string",
  "reference": "string",
  "opened": "2025-01-01T00:00:00Z",
  "update": {
    "date": "2025-01-01T00:00:00Z"
  },
  "beneficiaries": ["string"]
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (min 1 character) |
| `name` | string | No | Name of the asset (min 1 character) |
| `BBAN` | string | No | Basic Bank Account Number (min 1 character) |
| `IBAN` | string | No | International Bank Account Number (min 3 characters) |
| `reference` | string | No | Reference of the asset (min 1 character) |
| `opened` | string | No | Contract opening date (date-time format) |
| `update.date` | string | No | Last update date (date-time format) |
| `beneficiaries` | array | No | List of identifiers of beneficiary clients |

## transaction

Represents a financial transaction.

```json
{
  "id": "string",
  "date": "2025-01-01T00:00:00Z",
  "amount": {
    "value": 1000.50,
    "instrument": "EUR"
  },
  "name": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (min 1 character) |
| `date` | string | Yes | Date of the transaction (date-time format) |
| `amount` | object | Yes | Amount of the transaction |
| `name` | string | No | Name/description of the transaction (min 1 character) |

## amount

Represents a financial value expressed in a given instrument (EUR, BTC, XMR, AAPL, US0378331005).

```json
{
  "value": 1000.50,
  "instrument": "EUR"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | number | Yes | Numeric value (float format) |
| `instrument` | string | Yes | Financial instrument: currency, crypto, stock ticker, ISIN (min 1 character) |

## investment

Represents an investment held in an asset.

```json
{
  "code": "US0378331005",
  "update": {
    "date": "2025-01-01T00:00:00Z"
  },
  "quantity": 10.5,
  "value": {
    "value": 1575.50,
    "instrument": "EUR"
  },
  "name": "Apple Inc.",
  "acquisition": {
    "date": "2024-01-01T00:00:00Z",
    "value": {
      "value": 1200.00,
      "instrument": "EUR"
    }
  }
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `code` | string | Yes | Code of the investment (min 1 character) |
| `update.date` | string | No | Last update date (date-time format) |
| `quantity` | number | Yes | Quantity held (e.g.: 3 shares) (float format) |
| `value` | object | Yes | Current valuation in another instrument (preferably a currency) |
| `name` | string | Yes | Name of the investment (min 1 character) |
| `acquisition.date` | string | No | Acquisition date (date-time format) |
| `acquisition.value` | object | No | Valuation at the time of acquisition in another instrument |