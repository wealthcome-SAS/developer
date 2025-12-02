---
title: List all companies
description: Retrieve the list of all available companies with cursor pagination.
---

# List all companies

Retrieves the list of all available companies.

## Endpoint

```http
GET /v0/companies
```

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "data": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "next": "string",
  "previous": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of companies |
| `data[].id` | string | Yes | Unique identifier of the company |
| `data[].name` | string | Yes | Name of the company |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.