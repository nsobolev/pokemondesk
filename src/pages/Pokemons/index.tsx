import React from 'react';
import PokemonList from '../../components/Pokemons/PokemonList';
import { pokemons } from '../../components/Pokemons/data';

import styles from './Pokemons.module.less';

const PokemonsPage = () => {
  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>
        <div>
          <PokemonList pokemons={pokemons} />
        </div>
      </div>
    </div>
  );
};

export default PokemonsPage;
