---
title: Aggregated API — Introduction
description: This specification describes the Aggregated API for managing companies, customers, teams, entities, references, managers, assets, and parent companies in the Wealthcome ecosystem.
---

# Aggregated API — Introduction

**Version:** 0.1.0

This specification describes the Aggregated API for managing companies, customers, teams, entities, references, managers, assets, and parent companies in the Wealthcome ecosystem.

## General Information

**Base Server:** `/aggregated`

**Useful Links:**
- [Wealthcome](https://wealthcome.fr)
- [Developer Documentation](https://developer.wealthcome.fr)

**Contact:** dev@wealthcome.fr

**Terms of Use:** [https://www.wealthcome.fr/conditions-generales-utilisation](https://www.wealthcome.fr/conditions-generales-utilisation)

## Authentication

This API uses Bearer token authentication.

```http
Authorization: Bearer <token>
```

## API Sections

{% mermaid code="graph TD\nPC[Parent Company] --> C[Company]\nC --> T[Team]\nC --> M[Manager]\nC --> CU[Customer]\nC --> E[Entity]\nC --> A[Asset]\nT --> TM[Team Member&lt;br/&gt;Manager]\nM --> TM\nM --> CU\nCU --> R[Reference]\nE --> R\nA --> AI[Asset Information]\nA --> AT[Asset Transactions]\nA --> AV[Asset Valuation]\nsubgraph Data Flow\nCU -.-> R -.-> Aggregation\nE -.-> R -.-> Aggregation\nend\nsubgraph Management\nC -.-> T -.-> M\nM -.-> CU -.-> E\nend" theme="default" %}

{% grid %}
{% card title="Company" description="Information about companies" href="company-list" icon="Building" / %}
{% card title="Customer" description="Customer management" href="customer-statistics" icon="Users" / %}
{% card title="Team" description="Team management and members" href="team-statistics" icon="User" / %}
{% card title="Entity" description="Entity information (persons/companies)" href="entities-statistics" icon="User" / %}
{% card title="Reference" description="Customer references and aggregations" href="customer-references-statistics" icon="ExternalLink" / %}
{% card title="Manager" description="Manager management" href="manager-statistics" icon="Settings" / %}
{% card title="Assets" description="Financial asset management" href="assets-list" icon="TrendingUp" / %}
{% card title="Parent Company" description="Parent company information" href="parent-company-list" icon="Building" / %}
{% card title="Schemas" description="API schemas and data models" href="schemas/company" icon="Database" / %}
{% endgrid %}