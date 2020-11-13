import React, { FC } from 'react';

import styles from './PokemonStatList.module.less';
import PokemonStatRound from '../PokemonStatRound';

export type TPokemonStatList = {
  [n: string]: number;
};

export type TPokemonStatListProps = {
  stats: TPokemonStatList;
  offset?: number;
};

const PokemonStatList: FC<TPokemonStatListProps> = ({ stats, offset }) => {
  const list = Object.entries(stats);

  return (
    <ul className={styles.list}>
      {list.map(([name, count]: [string, number], index) => {
        if (index < (offset || list.length)) {
          return (
            <li key={name} className={styles.list__item}>
              <PokemonStatRound name={name} count={count} />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default PokemonStatList;
