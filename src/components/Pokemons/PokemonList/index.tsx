import React, { FC } from 'react';
import PokemonCard, { TPokemonCard } from '../PokemonCard';

import styles from './PokemonList.module.less';

type TPokemonListProps = {
  pokemons: TPokemonCard[];
};

const PokemonList: FC<TPokemonListProps> = ({ pokemons }) => {
  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon) => (
        <li className={styles.list__item}>
          <PokemonCard name={pokemon.name} stats={pokemon.stats} types={pokemon.types} img={pokemon.img} />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
