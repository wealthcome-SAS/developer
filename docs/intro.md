---
sidebar_position: 1
---

# Introduction

Welcome to the **Wealthcome Developer Portal**. This documentation provides all the resources you need to integrate with Wealthcome services.

## APIs

### Aggregated API

The main API for managing professional wealth management data: companies, entities, managers, assets, contracts, transactions, and task operations (imports/extractions).

- Base URL (production): `https://services.wealthcome.fr/aggregated`
- Base URL (preproduction): `https://services.preproduction.wealthcome.fr/aggregated`
- [View Aggregated API reference](/aggregated-specification/aggregated)

### Financial Provider Specification

The specification that financial providers must implement to integrate their data into Wealthcome Pro. Covers companies, managers, contracts, and assets endpoints.

- [View Provider Specification](/provider-specification/financial-provider-specification)

### Authentication

Authentication layer for obtaining and managing API tokens required to access Wealthcome services.

- Base URL: `https://services.wealthcome.fr/authentications`
- [View Authentication reference](/authentications/authentication-layer)

## Getting started

1. **Create an application** via the [Authentication API](/authentications/authentication-layer) to obtain your credentials.
2. **Generate a token** using your application credentials.
3. **Use the token** as a `Bearer` token in the `Authorization` header for all Aggregated API requests.

```bash
curl -H "Authorization: Bearer <your-token>" \
  https://services.wealthcome.fr/aggregated/companies
```
