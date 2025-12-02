---
title: List all managers
description: Retrieve the list of all available managers with cursor pagination.
---

# List all managers

Retrieves the list of all managers.

## Endpoint

```http
GET /v0/managers
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
      "name": "string",
      "email": "user@example.com",
      "phone": "+33123456789",
      "companies": ["string"]
    }
  ],
  "next": "string",
  "previous": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `data` | array | No | List of managers |
| `data[].id` | string | Yes | Unique identifier of the manager |
| `data[].name` | string | Yes | Name of the manager |
| `data[].email` | string | No | Email of the manager (email format) |
| `data[].phone` | string | No | Phone of the manager (phone format) |
| `data[].companies` | array | Yes | List of linked company identifiers |
| `next` | string | Yes | Cursor for the next page |
| `previous` | string | No | Cursor for the previous page |

## Pagination

This endpoint uses cursor pagination. Use the value of the `next` field to retrieve the next page.