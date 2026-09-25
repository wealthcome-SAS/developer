---
title: Comprendre la pagination
description: Comment paginer les grands jeux de résultats renvoyés par les API Wealthcome
---

# Comprendre la pagination

Les points d'accès de collection renvoient des résultats paginés pour éviter d'envoyer de très gros corps de réponse.

## Offset et limit

La plupart des points d'accès acceptent un couple `offset` (où commencer) et `limit` (combien de résultats) :

```bash
curl "{% base-url /%}/aggregated/companies?offset=0&limit=100" \
  -H "Authorization: Bearer <votre-jeton>"
```

| Paramètre | Type | Défaut | Maximum | Description |
|-----------|------|--------|---------|-------------|
| `offset` | nombre | `0` | — | Index du premier résultat à renvoyer |
| `limit` | nombre | `10` | `1000` | Nombre de résultats à renvoyer |

## Parcourir toutes les pages

```bash
offset=0
while true; do
  response=$(curl "{% base-url /%}/aggregated/companies?offset=$offset&limit=100" \
    -H "Authorization: Bearer <votre-jeton>")
  # traiter la page, puis vérifier s'il y a d'autres résultats
  count=$(echo "$response" | jq length)
  [ "$count" -lt 100 ] && break
  offset=$((offset + 100))
done
```

{% callout type="info" title="Points d'accès statistiques" %}
Certains points d'accès exposent un compagnon `/statistics` qui renvoie uniquement le nombre total, afin que vous sachiez combien de pages attendre avant d'itérer.
{% /callout %}
