import React, { FC } from 'react';
import PokemonCard, { TPokemonCard } from '../PokemonCard';

import styles from './PokemonList.module.less';

export type TPokemonList = {
  pokemons: TPokemonCard[];
  onClickAt: (id: number) => void;
};

const PokemonList: FC<TPokemonList> = ({ pokemons, onClickAt }) => {
  return (
    <ul className={styles.list}>
      {pokemons.map((pokemon, index) => (
        <li key={`${pokemon.name}_${index}`} className={styles.list__item}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            stats={pokemon.stats}
            types={pokemon.types}
            img={pokemon.img}
            onClick={(_) => onClickAt(pokemon.id)}
          />
        </li>
      ))}
    </ul>
  );
};

PokemonList.defaultProps = {
  onClickAt: () => {},
};

export default PokemonList;
