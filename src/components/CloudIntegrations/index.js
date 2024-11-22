import React, { useState } from "react";
import styles from "./styles.module.css";

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
];

export default function CloudIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.integrations}>
      <div className="container">
        <h4 className={styles.heading}>Integrations</h4>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <div className={styles.integrationGrid}>
          {filteredIntegrations.map((integration) => (
            <a
              key={integration.id}
              href={integration.link}
              className={styles.integrationCard}
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className={styles.integrationLogo}
              />
              <span className={styles.integrationName}>{integration.name}</span>
            </a>
          ))}
        </div>
        {filteredIntegrations.length === 0 && (
          <div className={styles.noResults}>No integrations found.</div>
        )}
      </div>
    </section>
  );
}
