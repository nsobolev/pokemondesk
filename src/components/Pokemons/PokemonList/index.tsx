import React, { FC } from 'react';
import PokemonCard, { TPokemonCard } from '../PokemonCard';

import styles from './PokemonList.module.less';

export type TPokemonList = {
  pokemons: TPokemonCard[];
};

const PokemonList: FC<TPokemonList> = ({ pokemons }) => {
  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon, index) => (
        <li key={`${pokemon.name}_${index}`} className={styles.list__item}>
          <PokemonCard name={pokemon.name} stats={pokemon.stats} types={pokemon.types} img={pokemon.img} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
