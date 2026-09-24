---
title: Support & Request ID
description: How to get help and how to use the Request ID to diagnose issues
---

# Support & Request ID

When you contact Wealthcome support, we need a way to identify the exact request that failed. Every response includes a **Request ID** for this purpose.

## Where to find the Request ID

The Request ID is returned in the HTTP response headers under the `x-request-id` (or `request-id`) header:

```bash
curl -i "{% base-url /%}/aggregated/companies" \
  -H "Authorization: Bearer <your-token>"
```

Look at the response headers:

```
HTTP/1.1 200 OK
x-request-id: 7f3c9d2e-1a2b-4c5d-8e6f-0a1b2c3d4e5f
```

## Using the Request ID

When opening a support ticket, include the Request ID of the failing request along with:

- The endpoint you were calling
- The HTTP method and status code
- A timestamp of when the error occurred
- The environment (production or preproduction)

This lets our team trace the exact request in our logs and diagnose the issue much faster.

{% callout type="info" title="Correlate multiple requests" %}
Use the same Request ID to correlate a series of related requests (e.g. a paginated loop) if you suspect a larger issue.
{% /callout %}

## Contacting support

- **Support email**: dev@wealthcome.fr
- Always include the Request ID(s) of the affected request(s).
