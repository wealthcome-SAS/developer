import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "provider-specification/financial-provider-specification",
    },
    {
      type: "category",
      label: "Company",
      link: {
        type: "doc",
        id: "provider-specification/company",
      },
      items: [
        {
          type: "doc",
          id: "provider-specification/list-companies",
          label: "List all companies.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/company-by-id",
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
        id: "provider-specification/manager",
      },
      items: [
        {
          type: "doc",
          id: "provider-specification/list-managers",
          label: "List all managers.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/manager-by-id",
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
        id: "provider-specification/contract",
      },
      items: [
        {
          type: "doc",
          id: "provider-specification/list-contracts",
          label: "List all contracts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/contract-by-id",
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
        id: "provider-specification/asset",
      },
      items: [
        {
          type: "doc",
          id: "provider-specification/list-assets",
          label: "List all assets.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/asset-by-id",
          label: "Get a asset detailed informations.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/list-transactions",
          label: "List all transactions related to an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/list-valuations",
          label: "The valuation in time of an asset.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "provider-specification/current-valuation",
          label: "The current valuation of an asset.",
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
          id: "provider-specification/schemas/company",
          label: "company",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/manager",
          label: "manager",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/contract",
          label: "contract",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/asset",
          label: "asset",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/transaction",
          label: "transaction",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/amount",
          label: "amount",
        },
        {
          type: "doc",
          id: "provider-specification/schemas/investment",
          label: "investment",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
