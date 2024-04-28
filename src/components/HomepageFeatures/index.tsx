import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  to?: string;
  comingSoon?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Authentification",
    Svg: require("@site/static/img/lock-closed.svg").default,
    description: <>Regroup and document all the step nessec.</>,
    to: "/category/authentification",
  },
  {
    title: "Migrations API",
    Svg: require("@site/static/img/switch-horizontal.svg").default,
    description: <>Coming soon.</>,
    to: "/category/migrations",
    comingSoon: true,
  },
  {
    title: "Aggregator API",
    Svg: require("@site/static/img/arrows-expand.svg").default,
    description: <>Coming soon.</>,
    to: "/category/aggregator",
    comingSoon: true,
  },
  {
    title: "Financial provider",
    Svg: require("@site/static/img/cash-outline.svg").default,
    description: (
      <>
        The documentation related to specification that financial provider, to
        provide with a fully integrated experience into Wealthcome Pro for their
        clients.
      </>
    ),
    to: "/provider-specification/financial-provider-specification",
  },
];

const GuidelinesFeaturesList: FeatureItem[] = [
  {
    title: "Customer",
    Svg: require("@site/static/img/user.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
  {
    title: "Company",
    Svg: require("@site/static/img/company.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
  {
    title: "Manager",
    Svg: require("@site/static/img/manager.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
  {
    title: "Asset",
    Svg: require("@site/static/img/asset.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
  {
    title: "Investment",
    Svg: require("@site/static/img/investment.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
  {
    title: "Transaction",
    Svg: require("@site/static/img/transaction.svg").default,
    description: <>Coming soon.</>,
    comingSoon: true,
  },
];

function Feature({ title, Svg, description, to, comingSoon }: FeatureItem) {
  return (
    <a
      href={comingSoon ? "#" : to}
      className="flex flex-col gap-y-2 w-full h-auto border-2 border-slate-500 rounded-xl hover:bg-slate-300/35 no-underline hover:text-gray-900 hover:no-underline"
    >
      <div className="w-full bg-gradient-to-r from-slate-500 to-slate-800 flex items-center justify-center overflow-hidden rounded-t-xl">
      <Svg
        className="w-14 h-14 p-2 rounded-md border border-slate-400 bg-slate-400/40 my-10"
        role="img"
      />
      </div>
      <div className="flex flex-col p-4">
        <Heading as="h2" className="text-2xl font-bold mb-2">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

function GuidelineFeature({
  title,
  Svg,
  description,
  to,
  comingSoon,
}: FeatureItem) {
  return (
    <a
      href={comingSoon ? "#" : to}
      className="flex gap-x-3 w-full h-auto border border-slate-300 rounded-xl p-4 hover:bg-slate-300/35 no-underline hover:text-gray-900 hover:no-underline"
    >
      <Svg className="w-7 h-7" role="img" />
      <div className="flex flex-col">
        <Heading as="h2" className="text-xl font-semibold mb-2">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="mt-10 flex flex-col gap-y-6">
          <div>
            <h2 className="text-3xl font-bold">Most popular</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-6">
          <div>
            <h2 className="text-3xl font-bold">Guides</h2>
            <span>Guidelines for the different entities in the system.</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GuidelinesFeaturesList.map((props, idx) => (
              <GuidelineFeature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
