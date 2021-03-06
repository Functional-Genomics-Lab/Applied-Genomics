import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Data Analysis',
    Svg: require('../../static/img/jupyter-logo.svg').default,
    description: <>Data exploration, hypothesis generation, and biases. </>,
  },
  {
    title: 'Reproducible Research',
    Svg: require('../../static/img/nf-core-logo.svg').default,
    description: (
      <>
        How to utilize <a href="https://nf-co.re/">nf-core</a> to avoid
        reinventing the wheel.{' '}
      </>
    ),
  },
  {
    title: 'Genomics',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>We'll explore the durability of genomic data. </>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
