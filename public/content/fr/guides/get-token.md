---
title: Obtenir un jeton d'accès
description: Authentifiez votre application et récupérez un jeton d'accès pour appeler les API Wealthcome
---

# Obtenir un jeton d'accès

Toutes les API Wealthcome exigent un jeton d'accès dans l'en-tête `Authorization`. Ce guide vous montre comment en obtenir un à partir de vos identifiants API.

## Prérequis

- Une clé API (un `roleID` et un `secretID`), partagée avec vous via 1Password
- L'URL de base de votre environnement (voir le sélecteur d'environnement en haut de cette page)

## Étape 1 — Appeler le point d'accès jeton

Envoyez une requête `POST` au point d'accès jeton avec vos identifiants :

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<votre-roleID>",
    "secretID": "<votre-secretID>"
  }'
```

## Étape 2 — Lire la réponse

Une requête réussie renvoie un jeton d'accès :

```json
{
  "token": "hvs.CAESI..."
}
```

## Étape 3 — Utiliser le jeton

Passez le jeton comme jeton porteur dans chaque requête suivante :

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <votre-jeton>"
```

{% callout type="info" title="Durée de vie du jeton" %}
Les jetons d'accès ont une durée de vie courte. Lorsque vous recevez une réponse `401`, obtenez un nouveau jeton en répétant l'étape 1.
{% /callout %}

## Erreurs

| Code HTTP | Signification |
|-----------|---------------|
| `401` | `roleID` ou `secretID` invalide. Vérifiez vos identifiants. |
| `403` | Votre application n'est pas autorisée pour cette ressource. |
