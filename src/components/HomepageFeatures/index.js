import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collect Matter Data',
    Svg: require('@site/static/img/GetMatterData.svg').default,
    description: (
      <>
        Automatically gather real-time data from Matter-enabled IoT devices. Send data into automated workflows.
      </>
    ),
  },
  {
    title: 'Model & Transform Data',
    Svg: require('@site/static/img/DataToJson.svg').default,
    description: (
      <>
        Easily model and convert IoT data into JSON or CSV formats. Craft the data to your specific downstream needs.
      </>
    ),
  },
  {
    title: 'Upload & Integrate Data',
    Svg: require('@site/static/img/CloudProviders.svg').default,
    description: (
      <>
        Send transformed data to the cloud and integrate with AI systems. Use Matterflow to power your AI applications.
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
