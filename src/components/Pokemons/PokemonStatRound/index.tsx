import React, { FC } from 'react';

import styles from './PokemonStatRound.module.less';

export type TPokemonStatRound = {
  name: string;
  count: number;
};

const PokemonStatRound: FC<TPokemonStatRound> = ({ name, count }) => {
  return (
    <div className={styles.stat}>
      <div className={styles.stat__round}>{count}</div>
      <p className={styles.stat__name}>{name}</p>
    </div>
  );
};

export default PokemonStatRound;
