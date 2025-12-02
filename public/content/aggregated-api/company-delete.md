---
title: Company — Delete a company
description: Delete a specific company and log the deletion.
---

# Delete a company

Deletes a company and logs the deletion.

## Endpoint

```http
DELETE /companies/{company-id}
```

## Parameters

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company-id` | string | Yes | Unique identifier of the company (UUID format) |

## Response

**Code:** `200 OK`

**Content-Type:** `application/json`

### Response Structure

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the deleted company (UUID format) |
| `name` | string | Yes | Name of the deleted company |

### Error Responses

**Code:** `404 Not Found`

```json
{
  "message": "Company not found"
}
```