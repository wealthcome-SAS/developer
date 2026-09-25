---
title: Update a customer record
description: Update the information of an existing customer
---

# Update a customer record

This guide shows you how to update an existing customer's information through the API.

## 1. Get a token

See [Get an access token](/docs/guides/get-token) if you don't have a token yet.

## 2. Find the customer

Identify the customer `id` you want to update:

```bash
curl "{% base-url /%}/aggregated/companies/<company-id>/customers?limit=50" \
  -H "Authorization: Bearer <your-token>"
```

## 3. Send the update

Send a `PATCH` request with the fields you want to change:

```bash
curl -X PATCH "{% base-url /%}/aggregated/customers/<customer-id>" \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Marie",
    "lastname": "Dupont"
  }'
```

{% callout type="info" title="Partial updates" %}
Use `PATCH` to update only the fields you provide. Omitted fields are left unchanged.
{% /callout %}

## Response

A successful update returns the updated customer object:

```json
{
  "id": "customer-456",
  "firstname": "Marie",
  "lastname": "Dupont"
}
```

## Errors

| HTTP status | Meaning |
|-------------|---------|
| `404` | Customer not found. Check the customer `id`. |
| `422` | The request payload is invalid. Check the field types. |
