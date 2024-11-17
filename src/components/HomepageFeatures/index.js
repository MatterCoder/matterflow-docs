import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
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

function Feature({Svg, title, link, description}) {
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
    <section>
    <div className="container">
        <iframe width="100%" style={{"aspect-ratio": "16 / 9"}} src="https://demo.arcade.software/uwYZqZ43CgRoaimiBnvY?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Demo video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </section>
    </>
  );
}
