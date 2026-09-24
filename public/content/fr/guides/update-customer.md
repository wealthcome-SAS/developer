---
title: Mettre à jour une fiche client
description: Mettez à jour les informations d'un client existant
---

# Mettre à jour une fiche client

Ce guide vous montre comment mettre à jour les informations d'un client existant via l'API.

## 1. Obtenir un jeton

Consultez [Obtenir un jeton d'accès](/docs/guides/get-token) si vous n'avez pas encore de jeton.

## 2. Trouver le client

Identifiez l'`id` du client que vous souhaitez mettre à jour :

```bash
curl "{% base-url /%}/aggregated/companies/<id-societe>/customers?limit=50" \
  -H "Authorization: Bearer <votre-jeton>"
```

## 3. Envoyer la mise à jour

Envoyez une requête `PATCH` avec les champs que vous souhaitez modifier :

```bash
curl -X PATCH "{% base-url /%}/aggregated/customers/<id-client>" \
  -H "Authorization: Bearer <votre-jeton>" \
  -H "Content-Type: application/json" \
  -d '{
    "firstname": "Marie",
    "lastname": "Dupont"
  }'
```

{% callout type="info" title="Mises à jour partielles" %}
Utilisez `PATCH` pour ne modifier que les champs que vous fournissez. Les champs omis restent inchangés.
{% /callout %}

## Réponse

Une mise à jour réussie renvoie l'objet client mis à jour :

```json
{
  "id": "customer-456",
  "firstname": "Marie",
  "lastname": "Dupont"
}
```

## Erreurs

| Code HTTP | Signification |
|-----------|---------------|
| `404` | Client introuvable. Vérifiez l'`id` du client. |
| `422` | Le corps de la requête est invalide. Vérifiez les types de champs. |
