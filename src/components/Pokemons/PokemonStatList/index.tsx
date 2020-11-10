import React, { FC } from 'react';

import styles from './PokemonStatList.module.less';
import PokemonStatRound from '../PokemonStatRound';

export type TPokemonStatList = {
  [n: string]: number;
};

export type TPokemonStatListProps = {
  stats: TPokemonStatList;
};

const PokemonStatList: FC<TPokemonStatListProps> = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {Object.entries(stats).map(([name, count]: [string, number]) => {
        return (
          <li className={styles.list__item}>
            <PokemonStatRound name={name} count={count} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonStatList;
