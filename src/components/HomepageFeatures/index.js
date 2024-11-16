import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Data from Matter Devices',
    Svg: require('@site/static/img/1_get_data_from_iot.svg').default,
    description: (
      <>
        Collect Data from a Matter based IoT device running on your local Matter fabric and feed this into an automated data workflow.
      </>
    ),
  },
  {
    title: 'Automate Data using workflows',
    Svg: require('@site/static/img/2_model_iot_data.svg').default,
    description: (
      <>
        Model and Transform your Matter Data to your needs using advanced and prebuilt components on a drag and drop workflow editor.
      </>
    ),
  },
  {
    title: 'Send to Cloud or AI Applications',
    Svg: require('@site/static/img/3_send_to_cloud.svg').default,
    description: (
      <>
        Automatically Send your Data to the Cloud or AI Applications and gain further insights from your Data.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
