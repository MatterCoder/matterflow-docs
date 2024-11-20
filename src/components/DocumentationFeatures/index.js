import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const DocumentationList = [
  {
    title: 'Getting Started →',
    Svg: require('@site/static/img/GettingStarted.svg').default,
    link: '/docs/category/getting-started',
    description: (
      <>
        Learn how to get started with Matterflow.
      </>
    ),
  },
  {
    title: 'Installation →',
    Svg: require('@site/static/img/Installation.svg').default,
    link: '/docs/category/installation',
    description: (
      <>
        Learn how to install Matterflow.
      </>
    ),
  },
  {
    title: 'Documentation →',
    Svg: require('@site/static/img/Documentation.svg').default,
    link: '/docs/category/documentation',
    description: (
      <>
        Learn how to configure Matterflow.
      </>
    ),
  },
];

function Document({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><a href={link}>{title}</a></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function DocumentationFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container">
      <div className="row">
          <div className={clsx('col text--center')}>
          <Heading as="h1">Documentation</Heading>
          <p>Learn how to use Matterflow</p>
          </div>
        </div>
        <div className="row">
          {DocumentationList.map((props, idx) => (
            <Document key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section>
    <div className="container">
        <iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://app.arcade.software/share/MvwiS1mHk57Klg66NoBy" title="Demo video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </section>
    </>
  );
}
