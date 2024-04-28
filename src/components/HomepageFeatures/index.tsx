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
    to: "/docs/category/authentification",
  },
  {
    title: "Migrations API",
    Svg: require("@site/static/img/switch-horizontal.svg").default,
    description: <>Coming soon.</>,
    to: "/docs/category/migrations",
    comingSoon: true,
  },
  {
    title: "Aggregator API",
    Svg: require("@site/static/img/arrows-expand.svg").default,
    description: <>Coming soon.</>,
    to: "/docs/category/aggregator",
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
    to: "/docs/category/financial-provider",
  },
];

function Feature({ title, Svg, description, to, comingSoon }: FeatureItem) {
  return (
    <a href={comingSoon ? "#" : to} className="flex flex-col gap-y-2 w-full h-auto border-2 border-slate-500 rounded-xl p-4 hover:bg-slate-300/35 no-underline">
      <Svg className="w-12 h-12 p-2 rounded-md border border-slate-400 bg-slate-400/40 dark:bg-red-600" role="img" />
      <div className="flex flex-col">
        <Heading as="h2" className="text-2xl font-bold py-1">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
