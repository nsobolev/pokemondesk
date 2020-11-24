import React, { FC } from 'react';
import styles from './PokemonAbilities.module.less';

type TPokemonAbility = string;

type TPokemonAbilities = {
  abilities: TPokemonAbility[];
};

const PokemonAbilities: FC<TPokemonAbilities> = ({ abilities }) => {
  return (
    <div className={styles.abilities}>
      <h3 className={styles.abilities__header}>Abilities</h3>
      <ul className={styles.abilities__list}>
        {abilities.map((ability, index) => (
          <li key={`${ability}_${index}`} className={styles.abilities__item}>
            {ability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAbilities;
