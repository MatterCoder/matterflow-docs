import React, { useState } from "react";
import styles from "./styles.module.css";
import clsx from 'clsx';
import Heading from '@theme/Heading';

const integrations = [
  {
    id: 1,
    name: "CSV Output",
    logo: "/img/CsvFile.png",
    link: "/docs/apache-airflow-providers-amazon/stable/operators/step_functions.html",
  },
  {
    id: 2,
    name: "Json Output",
    logo: "/img/JsonFile.png",
    link: "/docs/apache-airflow-providers-amazon/stable/operators/step_functions.html",
  },
  {
    id: 3,
    name: "AWS S3",
    logo: "/img/SimpleStorageService.png",
    link: "/docs/apache-airflow-providers-apache-pig/stable/operators.html",
  },
  {
    id: 4,
    name: "AWS Sitewise",
    logo: "/img/IoTSiteWise.png",
    link: "/docs/apache-airflow-providers-jira/stable/index.html",
  },
  {
    id: 5,
    name: "Google Cloud Storage",
    logo: "/img/GoogleCloudPlatform.png",
    link: "/docs/apache-airflow-providers-amazon/stable/operators/step_functions.html",
  },
  {
    id: 6,
    name: "Azure Blob Storage",
    logo: "/img/AzureBlobStorage.png",
    link: "/docs/apache-airflow-providers-amazon/stable/operators/step_functions.html",
  },
  
  // Add more items as needed
];

export default function CloudIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function Integration({logo, name, link}) {
    return (
      <div className={clsx('col col--4', styles.borderedDiv)}>
        <div className="text--center">
          <img src={logo} alt={`${name} logo`} className={styles.integrationImg} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{name}</Heading>
        </div>
      </div>
    );
  }

  return (
    <>
    <section className={styles.integrations}>
      <div className="container">
        <div className="row">
          <div className={clsx('col text--center')}>
          <Heading as="h1">Integrations</Heading>
          </div>
        </div>
        <div className="row">
          <div className={clsx('col text--center')}>
          <form className={styles.searchForm}>
            <input
              className={styles.searchFormInput}
              placeholder="Search"
              name="q"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={styles.searchFormButton}
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              🔍
            </button>
          </form>
          </div>
        </div>
        <div className="row">
          &nbsp;
        </div>
        <div className="row">
          {filteredIntegrations.map((props, idx) => (
            <Integration key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </>
  );


  return (
    <section className={styles.integrations}>
      <div className="container">
        <div className="row">
          <h4 className={styles.pageHeader}>Integrations</h4>
        </div>
        <div className="row">
          <form className={styles.searchForm}>
            <input
              className={styles.searchFormInput}
              placeholder="Search"
              name="q"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={styles.searchFormButton}
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              🔍
            </button>
          </form>
          </div>
        <div className="row">

          {/* Ensure the div wrapping the items has the correct class */}
          <div className={styles.listItems}>
            {filteredIntegrations.length > 0 ? (
              filteredIntegrations.map((integration) => (
                <a
                  key={integration.id}
                  href={integration.link}
                  className={styles.integration}
                >
                  <div className={styles.card}>
                    <img
                      width={integration.width}
                      height={integration.height}
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      className={styles.boxEventIntegrationLogo}
                    />
                    <span className={styles.boxEventIntegrationName}>
                      {integration.name}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div>No integrations found.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
