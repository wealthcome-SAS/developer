import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "aggregated/aggregated",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "aggregated/",
          label: "Missing summary",
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
          id: "aggregated/schemas/company",
          label: "Company",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
