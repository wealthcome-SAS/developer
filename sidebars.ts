import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

import providerSidebar from "./docs/provider-specification/sidebar";
import aggregatedSidebar from "./docs/aggregated-specification/sidebar";
import authenticationSidebar from "./docs/authentications/sidebar";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],


  provider: [
    {
      type: "category",
      label: "Financial Provider Specification",
      link: {
        type: "generated-index",
        title: "Financial Provider Specification API",
        slug: "/category/provider-specification",
      },
      items: providerSidebar,
    },
    {
      type: "category",
      label: "Aggregated API",
      link: {
        type: "generated-index",
        title: "Aggregated API",
        slug: "/category/aggregated-specification",
      },
      items: aggregatedSidebar,
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "generated-index",
        title: "Authentication Layer",
        slug: "/category/authentication",
      },
      items: authenticationSidebar,
    }
  ],
};

export default sidebars;
