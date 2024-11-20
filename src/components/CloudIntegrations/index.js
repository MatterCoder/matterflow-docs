import React, { useState } from "react";
import styles from "./styles.module.css";

const integrations = [
  {
    id: 1,
    name: "Apache Pig",
    logo: "/integration-logos/apache/pig.png",
    link: "/docs/apache-airflow-providers-apache-pig/stable/operators.html",
  },
  {
    id: 2,
    name: "Atlassian Jira",
    logo: "/integration-logos/jira/Jira.png",
    link: "/docs/apache-airflow-providers-jira/stable/index.html",
  },
  {
    id: 3,
    name: "AWS Step Functions",
    logo: "/integration-logos/aws/AWS-Step-Functions_light-bg@4x.png",
    link: "/docs/apache-airflow-providers-amazon/stable/operators/step_functions.html",
  },
  // Add more items as needed
];

export default function CloudIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h4 className={`${styles.pageHeader} ${styles.integrationsHeader}`}>
        Integrations
      </h4>

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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g transform="translate(-41.001 -41)">
              <path
                d="M71.415 64.687a7.215 7.215 0 1 0-6.729 6.728 7.222 7.222 0 0 0 6.729-6.728z"
                fill="none"
                transform="translate(-14.277 -14.276)"
              ></path>
              <path
                d="M60.863 59.8l-6.093-6.09a7.78 7.78 0 1 0-1.06 1.06l6.09 6.093a.468.468 0 0 0 .662 0l.4-.4a.468.468 0 0 0 .001-.663zM42.512 49.183a6.274 6.274 0 1 1 5.851 5.85 6.28 6.28 0 0 1-5.851-5.85z"
                fill="#51504f"
              ></path>
            </g>
          </svg>
        </button>
      </form>

      <div id="integrations-container" className={styles.listItems}>
        {filteredIntegrations.length > 0 ? (
          filteredIntegrations.map((integration) => (
            <a key={integration.id} href={integration.link} className={styles.listItem}>
              <div className={styles.card}>
                <div className={`${styles.boxEvent} ${styles.boxEventIntegration}`}>
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className={styles.boxEventIntegrationLogo}
                  />
                  <span className={styles.boxEventIntegrationName}>{integration.name}</span>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div>No integrations found.</div>
        )}
      </div>
    </div>
  );
}
