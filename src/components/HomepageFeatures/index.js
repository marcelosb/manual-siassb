import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/mountain.svg').default,
    description: (
      <>
        Este manual foi desenvolvido utilizando tecnologia moderna e está organizado por módulos de uso.
      </>
    ),
  },
  {
    title: 'Foque no que importa',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        Por ser tratar de um sistema integrado com milhares de funcionalidades, foque naquilo que realmente importa,
        conforme seu perfil de acesso.
      </>
    ),
  },
  {
    title: 'Desenvolvido em React',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
        Tecnologia usada por grandes empresas no mundo inteiro, manual com acessibilidade em página única com carregamento rápido.
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
