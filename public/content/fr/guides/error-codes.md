---
title: Codes d'erreur
description: Codes d'erreur HTTP courants renvoyés par les API Wealthcome
---

# Codes d'erreur

Cette page décrit les codes d'erreur HTTP courants que vous pouvez rencontrer, et comment les gérer.

## Codes de statut

| Code HTTP | Nom | Description |
|-----------|-----|-------------|
| `200` | OK | La requête a réussi. |
| `201` | Created | Une ressource a été créée. |
| `204` | No Content | La requête a réussi, sans corps renvoyé. |
| `400` | Bad Request | La requête est mal formée. Vérifiez les paramètres. |
| `401` | Unauthorized | Jeton manquant ou invalide. Réauthentifiez-vous. |
| `403` | Forbidden | Le jeton est valide mais votre application manque de permissions. |
| `404` | Not Found | La ressource demandée n'existe pas. |
| `409` | Conflict | La requête entre en conflit avec l'état actuel. |
| `422` | Unprocessable Entity | Le corps est syntaxiquement valide mais sémantiquement invalide. |
| `429` | Too Many Requests | Vous avez dépassé la limite de débit. Ralentissez. |
| `500` | Internal Server Error | Une erreur inattendue est survenue de notre côté. |
| `503` | Service Unavailable | Le service est temporairement indisponible. |

## Format de la réponse d'erreur

Les erreurs incluent un corps structuré :

```json
{
  "error": {
    "code": "CUSTOMER_NOT_FOUND",
    "message": "Customer customer-456 was not found"
  }
}
```

## Gérer un 401

Un `401` signifie généralement que votre jeton a expiré. Demandez un nouveau jeton :

```bash
curl -X POST {% base-url /%}/authentications/applications/token \
  -H "Content-Type: application/json" \
  -d '{
    "roleID": "<votre-roleID>",
    "secretID": "<votre-secretID>"
  }'
```
