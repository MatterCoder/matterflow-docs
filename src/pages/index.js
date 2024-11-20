import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocumentationFeatures from '@site/src/components/DocumentationFeatures';
import CloudIntegrations from '@site/src/components/CloudIntegrations';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Matterflow Tutorial - 5min ⏱️
          </Link>
          &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/MatterCoder/Matterflow/stargazers">
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Mattercoder/Matterflow"/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Matter based data workflows for the cloud and AI applications">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CloudIntegrations />
        <DocumentationFeatures />
      </main>
    </Layout>
  );
}
