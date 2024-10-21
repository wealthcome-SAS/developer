import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "aggregated-specification/aggregated-api",
    },
    {
      type: "category",
      label: "Company",
      link: {
        type: "doc",
        id: "aggregated-specification/company",
      },
      items: [
        {
          type: "doc",
          id: "aggregated-specification/list-companies",
          label: "List all companies.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/company-by-id",
          label: "Get a company detailed informations.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Manager",
      link: {
        type: "doc",
        id: "aggregated-specification/manager",
      },
      items: [
        {
          type: "doc",
          id: "aggregated-specification/list-managers",
          label: "List all managers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/manager-by-id",
          label: "Get a manager detailed informations.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Contract",
      link: {
        type: "doc",
        id: "aggregated-specification/contract",
      },
      items: [
        {
          type: "doc",
          id: "aggregated-specification/list-contracts",
          label: "List all contracts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/contract-by-id",
          label: "Get a contract detailed informations.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Asset",
      link: {
        type: "doc",
        id: "aggregated-specification/asset",
      },
      items: [
        {
          type: "doc",
          id: "aggregated-specification/list-assets",
          label: "List all assets.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/asset-by-id",
          label: "Get a asset detailed informations.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/list-transactions",
          label: "List all transactions related to an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/list-valuations",
          label: "The valuation in time of an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/current-valuation",
          label: "The current valuation of an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/list-investments",
          label: "List all investments currently held in an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated-specification/list-investments-history",
          label: "The history of investments in an asset.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "aggregated-specification/schemas/cursor-paginated",
          label: "cursor_paginated",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/company",
          label: "company",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/manager",
          label: "manager",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/contract",
          label: "contract",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/asset",
          label: "asset",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/transaction",
          label: "transaction",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/amount",
          label: "amount",
        },
        {
          type: "doc",
          id: "aggregated-specification/schemas/investment",
          label: "investment",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
