---
title: Lister vos sociétés
description: Récupérez la liste des sociétés auxquelles votre application peut accéder
---

# Lister vos sociétés

Une fois que vous avez un jeton, vous pouvez lister les sociétés auxquelles votre application est autorisée à accéder.

## Requête

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <votre-jeton>"
```

## Réponse

La réponse est un tableau de sociétés :

```json
[
  {
    "id": "b50be977-c4cb-41ea-b5f8-589165f2ea28",
    "name": "Saint-Exupéry Patrimoine",
    "specific": null
  }
]
```

## Pagination

Le point d'accès prend en charge la pagination avec les paramètres de requête `offset` et `limit` :

| Paramètre | Type | Défaut | Maximum | Description |
|-----------|------|--------|---------|-------------|
| `offset` | nombre | `0` | — | Index du premier résultat à renvoyer |
| `limit` | nombre | `10` | `1000` | Nombre de résultats à renvoyer |

```bash
curl "{% base-url /%}/aggregated/companies?offset=0&limit=50" \
  -H "Authorization: Bearer <votre-jeton>"
```

{% callout type="info" title="Sociétés mères" %}
Si votre société est une société mère, la réponse inclut toutes ses filiales auxquelles votre application est autorisée à accéder.
{% /callout %}
