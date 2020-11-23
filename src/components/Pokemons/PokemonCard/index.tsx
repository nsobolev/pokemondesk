import React, { FC } from 'react';
import PokemonStatList, { TPokemonStatList } from '../PokemonStatList';
import PokemonTypes, { TPokemonTypes } from '../PokemonTypes';

import styles from './PokemonCard.module.less';

enum GalleryBackground {
  SUCCESS,
  INFO,
  ERROR,
  WARNING,
  ROSE,
}

type TRandomInteger = (min: number, max: number) => number;

export type TPokemonCard = {
  id: number;
  name: string;
  stats: TPokemonStatList;
  types: TPokemonTypes;
  img: string;
  onClick?: (evt: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
};

const PokemonCard: FC<TPokemonCard> = ({ name, img, stats, types, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick} onKeyPress={onClick} role="menuitem" tabIndex={0}>
      <div className={styles.card__info}>
        <h3 className={styles.card__slogan}>{name}</h3>
        <div className={styles.card__stats}>
          <PokemonStatList stats={stats} offset={2} />
        </div>
        <div>
          <PokemonTypes types={types} />
        </div>
      </div>
      <div className={`${styles.card__gallery} ${getBackgroundColorGallery(randomInteger(0, 4))}`}>
        <img className={styles.card__image} src={img} alt={name} />
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {
  onClick: () => {},
};

const getBackgroundColorGallery = (name: GalleryBackground | undefined) => {
  switch (name) {
    case GalleryBackground.SUCCESS:
      return `${styles.card__gallery_view_success}`;
    case GalleryBackground.INFO:
      return `${styles.card__gallery_view_info}`;
    case GalleryBackground.ERROR:
      return `${styles.card__gallery_view_error}`;
    case GalleryBackground.WARNING:
      return `${styles.card__gallery_view_warning}`;
    case GalleryBackground.ROSE:
      return `${styles.card__gallery_view_rose}`;

    default:
      return '';
  }
};

const randomInteger: TRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default PokemonCard;
