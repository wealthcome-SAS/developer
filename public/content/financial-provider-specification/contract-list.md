---
title: List all contracts
description: Retrieve the list of all contracts. By default, only ongoing contracts are returned.
---

# List all contracts

Retrieves the list of all available contracts.

## Endpoint

```http
GET /v0/contracts
```

## Description

By default, this call returns only ongoing contracts.

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "managers": ["string"],
      "customers": ["string"],
      "assets": ["string"]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of contracts |
| `data[].id` | string | Yes | Unique identifier of the contract |
| `data[].name` | string | Yes | Name of the contract |
| `data[].managers` | array | No | List of identifiers of managers linked to this contract |
| `data[].customers` | array | No | List of identifiers of customers linked to this contract |
| `data[].assets` | array | Yes | List of identifiers of assets linked to this contract |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.