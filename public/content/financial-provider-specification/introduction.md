---
title: Financial Provider Specification – Introduction
description: This specification describes what a financial provider must comply with to offer its clients (wealth management companies) an integration of their data into a wealth aggregator (Wealthcome).
---

# Financial Provider Specification – Introduction

**Version:** 0.1.0

This specification describes what a financial provider must comply with to offer its clients (wealth management companies) an integration of their data into a wealth aggregator (*Wealthcome*).

## General Information

**Base Server:** `/v0`

**Useful Links:**
- [Wealthcome](https://wealthcome.fr)
- [Partner Documentation](https://partners.wealthcome.fr)

**Contact:** dev@wealthcome.fr

**Terms of Use:** [https://www.wealthcome.fr/conditions-generales-utilisation](https://www.wealthcome.fr/conditions-generales-utilisation)

## API Sections

{% mermaid code="flowchart TD\nFP[Financial Provider] -->|Setup| Reg[Registration&lt;br/&gt;with Wealthcome]\nReg -->|API Keys| Auth[Authentication&lt;br/&gt;Setup]\nAuth -->|Data Mapping| DM[Data Mapping&lt;br/&gt;Schemas]\nDM -->|Initial Sync| IS[Initial Data&lt;br/&gt;Synchronization]\nIS -->|Ongoing| OS[Ongoing Sync&lt;br/&gt;Webhooks/Polling]\nOS -->|Monitoring| Mon[Monitor &lt;br/&gt;Error Handling]\nMon -->|Updates| Up[Schema Updates&lt;br/&gt;& Maintenance]\nsubgraph Client Integration\nC[Wealth Management&lt;br/&gt;Company] -->|Connect| FP\nC -->|Data Access| W[Wealthcome&lt;br/&gt;Aggregator]\nend\nFP -.->|Provide Data| W\nW -.->|Aggregated View| C\nsubgraph Security\nS1[OAuth 2.0&lt;br/&gt;Compliance] --> Auth\nS2[Data Encryption] --> OS\nS3[Audit Logs] --> Mon\nend" theme="default" %}

{% grid %}
{% card title="Company" description="Information about companies" href="company-list" icon="Building" / %}
{% card title="Manager" description="Management of managers" href="manager-list" icon="User" / %}
{% card title="Contract" description="Operations related to contracts" href="contract-list" icon="FileText" / %}
{% card title="Asset" description="Management of financial assets" href="asset-list" icon="TrendingUp" / %}
{% card title="Schemas" description="API schemas and data models" href="schemas" icon="Database" / %}
{% endgrid %}