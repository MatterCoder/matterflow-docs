import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simplified Control',
    Svg: require('@site/static/img/dashboard.svg').default,
    description: (
      <>
        Easily monitor, schedule, and manage your Matter data workflows with a sleek, modern interface. Gain clear insights into task statuses and logs to keep your pipelines running smoothly.
      </>
    ),
  },
  {
    title: 'Cloud Integrations',
    Svg: require('@site/static/img/cloud-upload.svg').default,
    description: (
      <>
        Offers a wide range of plug-and-play operators to seamlessly execute tasks on Google Cloud Platform, Amazon Web Services, Microsoft Azure, and numerous other third-party services.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open-source-line.svg').default,
    description: (
      <>
        You can share your improvements effortlessly by opening a PR—it's that simple! No barriers or lengthy processes. Have questions? Join the conversation on our lively Slack channel!
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
