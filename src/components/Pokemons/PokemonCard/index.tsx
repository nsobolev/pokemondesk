import React, { FC } from 'react';
import PokemonStatList, { TPokemonStatList } from '../PokemonStatList';
import PokemonTypes, { TPokemonTypes } from '../PokemonTypes';

import styles from './PokemonCard.module.less';

export type TPokemonCard = {
  name: string;
  stats: TPokemonStatList;
  types: TPokemonTypes;
  img: string;
};

const PokemonCard: FC<TPokemonCard> = ({ name, img, stats, types }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <h3 className={styles.card__slogan}>{name}</h3>
        <div className={styles.card__stats}>
          <PokemonStatList stats={stats} />
        </div>
        <div>
          <PokemonTypes types={types} />
        </div>
      </div>
      <div className={styles.card__gallery}>
        <img className={styles.card__image} src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
