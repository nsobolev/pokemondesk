import React, { FC, useMemo } from 'react';

import classNames from 'classnames';
import PokemonStatRound from '../PokemonStatRound';
import styles from './PokemonStatList.module.less';

export type TPokemonStatList = {
  [n: string]: number;
};

export type TPokemonStatListProps = {
  stats: TPokemonStatList;
  offset?: number;
  isGridColumn?: boolean;
};

const PokemonStatList: FC<TPokemonStatListProps> = ({ stats, offset, isGridColumn }) => {
  const list = useMemo(() => Object.entries(stats), [stats]);

  return (
    <ul className={classNames(styles.list, { [`${styles.list_column}`]: isGridColumn })}>
      {list.map(([name, count]: [string, number], index) => {
        if (index < (offset || list.length)) {
          return (
            <li key={`${name}_${index}`} className={styles.list__item}>
              <PokemonStatRound name={name} count={count} />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

PokemonStatList.defaultProps = {
  isGridColumn: false,
};

export default PokemonStatList;
