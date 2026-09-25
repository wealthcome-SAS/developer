---
title: Understand pagination
description: How to paginate through large result sets returned by the Wealthcome APIs
---

# Understand pagination

Collection endpoints return paginated results to avoid sending very large payloads.

## Offset & limit

Most endpoints accept an `offset` (where to start) and a `limit` (how many results) pair:

```bash
curl "{% base-url /%}/aggregated/companies?offset=0&limit=100" \
  -H "Authorization: Bearer <your-token>"
```

| Parameter | Type | Default | Maximum | Description |
|-----------|------|---------|---------|-------------|
| `offset` | number | `0` | — | Index of the first result to return |
| `limit` | number | `10` | `1000` | Number of results to return |

## Loop through all pages

```bash
offset=0
while true; do
  response=$(curl "{% base-url /%}/aggregated/companies?offset=$offset&limit=100" \
    -H "Authorization: Bearer <your-token>")
  # process the page, then check if there are more results
  count=$(echo "$response" | jq length)
  [ "$count" -lt 100 ] && break
  offset=$((offset + 100))
done
```

{% callout type="info" title="Statistics endpoints" %}
Some endpoints expose a `/statistics` companion that returns only the total count, so you know how many pages to expect before iterating.
{% /callout %}
