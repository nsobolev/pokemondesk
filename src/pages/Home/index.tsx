import React from 'react';
import styles from './Home.module.less';

import * as Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__wrapper}>
        <div className={`${styles.home__container} container`}>
          <div className={styles.home__content}>
            <div className={styles.home__information}>
              <h2 className={styles.home__slogan}>Find all your favorite Pokemon</h2>
              <p className={styles.home__description}>
                You can know the type of Pokemon, its strengths, disadvantages and abilities
              </p>
              <Button.ViewLink color={Button.ColorsButton.Success} to="/pokemons">
                See pokemons
              </Button.ViewLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
