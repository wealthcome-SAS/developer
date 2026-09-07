import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "authentications/authentication-layer",
    },
    {
      type: "category",
      label: "Applications",
      items: [
        {
          type: "doc",
          id: "authentications/create-a-new-application",
          label: "Create a new application",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "authentications/generate-a-token-for-an-application",
          label: "Generate a token for an application",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
