---
title: Get contract detailed information
description: Retrieve the detailed information of a specific contract by its identifier.
---

# Get contract detailed information

Retrieves the detailed information of a specific contract.

## Endpoint

```http
GET /v0/contracts/{contract_id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contract_id` | string | Yes | Identifier of the contract to retrieve (min 1 character) |

## Responses

### Success

**Code:** `200 OK`

**Content-Type:** `application/json`

```json
{
  "id": "string",
  "name": "string",
  "managers": ["string"],
  "customers": ["string"],
  "assets": ["string"]
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the contract |
| `name` | string | Yes | Name of the contract |
| `managers` | array | No | List of identifiers of managers linked to this contract |
| `customers` | array | No | List of identifiers of customers linked to this contract |
| `assets` | array | Yes | List of identifiers of assets linked to this contract |

### Error

**Code:** `404 Not Found`

**Content-Type:** `application/json`

```json
{
  "message": "Resource not found"
}
```