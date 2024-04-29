import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="w-full items-center flex flex-col py-20">
      <img
        src="img/wealthcome-banner.svg"
        alt="Wealthcome Logo"
        className="container w-full h-auto"
      />

      <div className="flex flex-col w-full items-center gap-y-5 mt-10">
        <Heading as="h1" className="font-bold text-3xl md:text-5xl text-center px-10">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle w-1/2 text-center text-lg md:text-xl">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/category/authentification"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
