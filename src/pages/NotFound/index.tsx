import React from 'react';

import ParallaxImage from '../../components/ParallaxImage/index';
import * as Button from '../../components/Button';

import styles from './NotFound.module.less';
import RocketImageUrl from './assets/rocket.png';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={`${styles.notFound__container} container`}>
        <div className={styles.notFound__gallery}>
          <b className={styles.notFound__description}>404</b>
          <div className={styles.notFound__parallax}>
            <ParallaxImage url={RocketImageUrl} alt="Rocket Team" offsetX={0.05} offsetY={0.05} />
          </div>
        </div>
        <h2 className={styles.notFound__slogan}>
          The rocket team <span className={styles.notFound__contrast}>has won this time.</span>
        </h2>
        <Button.ViewLink className={styles.notFound__button} to="/">
          Return
        </Button.ViewLink>
      </div>
    </div>
  );
};

export default NotFound;
