---
title: Support et ID de requête
description: Comment obtenir de l'aide et utiliser l'ID de requête pour diagnostiquer les problèmes
---

# Support et ID de requête

Lorsque vous contactez le support Wealthcome, nous avons besoin d'un moyen d'identifier la requête exacte qui a échoué. Chaque réponse inclut un **ID de requête** à cette fin.

## Où trouver l'ID de requête

L'ID de requête est renvoyé dans les en-têtes de réponse HTTP sous l'en-tête `x-request-id` (ou `request-id`) :

```bash
curl -i "{% base-url /%}/aggregated/companies" \
  -H "Authorization: Bearer <votre-jeton>"
```

Regardez les en-têtes de réponse :

```
HTTP/1.1 200 OK
x-request-id: 7f3c9d2e-1a2b-4c5d-8e6f-0a1b2c3d4e5f
```

## Utiliser l'ID de requête

Lorsque vous ouvrez un ticket de support, incluez l'ID de requête de la requête en échec ainsi que :

- Le point d'accès que vous appeliez
- La méthode HTTP et le code de statut
- Un horodatage du moment où l'erreur s'est produite
- L'environnement (production ou préproduction)

Cela permet à notre équipe de tracer la requête exacte dans nos journaux et de diagnostiquer le problème beaucoup plus rapidement.

{% callout type="info" title="Corréler plusieurs requêtes" %}
Utilisez le même ID de requête pour corréler une série de requêtes liées (par exemple une boucle paginée) si vous suspectez un problème plus large.
{% /callout %}

## Contacter le support

- **E-mail du support** : dev@wealthcome.fr
- Incluez toujours le ou les ID de requête des requêtes concernées.
