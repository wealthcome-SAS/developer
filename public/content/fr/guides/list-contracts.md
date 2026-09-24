---
title: Récupérer vos contrats non archivés
description: Récupérez la liste de vos contrats non archivés
---

# Récupérer vos contrats non archivés

Ce guide vous montre comment récupérer les contrats encore actifs (non archivés).

## 1. Obtenir un jeton

Consultez [Obtenir un jeton d'accès](/docs/guides/get-token) si vous n'avez pas encore de jeton.

## 2. Lister vos sociétés

Identifiez d'abord la société que vous souhaitez consulter :

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <votre-jeton>"
```

Notez l'`id` de la société dans la réponse.

## 3. Récupérer les contrats

Appelez le point d'accès contrats de la société avec le filtre `archived=false` :

```bash
curl "{% base-url /%}/aggregated/companies/<id-societe>/contracts?archived=false" \
  -H "Authorization: Bearer <votre-jeton>"
```

## Réponse

```json
{
  "items": [
    {
      "id": "contract-123",
      "label": "Assurance-vie",
      "archived": false
    }
  ]
}
```

{% callout type="warning" title="Filtre archivé" %}
Le filtre `archived` est optionnel. S'il est omis, les contrats archivés sont inclus par défaut. Passez toujours `archived=false` pour les exclure.
{% /callout %}
