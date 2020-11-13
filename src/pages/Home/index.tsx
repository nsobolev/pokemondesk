import React from 'react';

import styles from './Home.module.less';
import PokemonsImageUrl from './assets/main-background.png';

import * as Button from '../../components/Button';
import ParallaxImage from '../../components/ParallaxImage';
import { LinksMenu } from '../index';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.home__container} container`}>
        <div className={styles.home__content}>
          <div className={styles.home__information}>
            <h2 className={styles.home__slogan}>Find all your favorite Pokemon</h2>
            <p className={styles.home__description}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </p>
            <Button.ViewLink color={Button.ColorsButton.Success} to={LinksMenu.POKEDEX}>
              See pokemons
            </Button.ViewLink>
          </div>
          <div className={styles.home__gallery}>
            <ParallaxImage url={PokemonsImageUrl} alt="Pikachu and pokemons" offsetX={0.04} offsetY={0.05} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
