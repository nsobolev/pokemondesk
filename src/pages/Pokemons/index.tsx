import React from 'react';
import PokemonList from '../../components/Pokemons/PokemonList';
import { pokemons } from '../../components/Pokemons/data';

import styles from './Pokemons.module.less';

const PokemonsPage = () => {
  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>
        <h2 className={styles.pokemons__slogan}>800 Pokemons for you to choose your favorite</h2>
        <div className={styles.pokemons__search}>Поиск</div>
        <div className={styles.pokemons__filter}>Фильтры</div>
        <div>
          <PokemonList pokemons={pokemons} />
        </div>
      </div>
    </div>
  );
};

export default PokemonsPage;
