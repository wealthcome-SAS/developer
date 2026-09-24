---
title: Démarrage rapide
description: Commencez avec les API Wealthcome en quelques étapes
---

# Démarrage rapide

Ce guide vous présente les premières étapes pour utiliser les API Wealthcome : obtenir un jeton, lister vos sociétés, puis récupérer vos données.

## Ce dont vous avez besoin

- Un **role ID** et un **secret ID** — les identifiants fournis par Wealthcome (partagés de façon sécurisée via 1Password)
- L'URL de base de l'environnement ciblé :
  - Production : `https://services.wealthcome.fr`
  - Préproduction : {% base-url /%}

{% callout type="info" title="Sélecteur d'environnement" %}
Le placeholder `{% base-url /%}` de cette documentation reflète automatiquement l'environnement sélectionné dans le sélecteur en haut à droite.
{% /callout %}

## 1. Obtenir un jeton d'accès

Échangez votre `roleID` et votre `secretID` contre un jeton porteur à durée limitée :

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<votre-roleID>",
    "secretID": "<votre-secretID>"
  }'
```

La réponse contient un `token` que vous passerez comme `Authorization: Bearer <token>` sur chaque requête suivante.

## 2. Lister vos sociétés

Utilisez le jeton pour lister les sociétés auxquelles votre application peut accéder :

```bash
curl {% base-url /%}/aggregated/companies \
  -H "Authorization: Bearer <votre-jeton>"
```

## 3. Explorer vos données

Une fois que vous avez un jeton et une société, vous pouvez commencer à appeler les points d'accès de données — contrats, clients, gestionnaires, et plus encore.

## Aller plus loin

- [Obtenir un jeton d'accès](/docs/guides/get-token) — détails complets sur l'authentification
- [Lister vos sociétés](/docs/guides/list-companies) — points d'accès sociétés
- [Récupérer vos contrats non archivés](/docs/guides/list-contracts) — points d'accès contrats
- [Mettre à jour une fiche client](/docs/guides/update-customer) — écrire des données
- [Comprendre la pagination](/docs/guides/pagination) — grands jeux de résultats
- [Codes d'erreur](/docs/guides/error-codes) — gérer les échecs
- [Support et ID de requête](/docs/guides/support) — obtenir de l'aide
