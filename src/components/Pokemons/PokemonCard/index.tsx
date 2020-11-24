import React, { FC, useMemo } from 'react';
import PokemonStatList, { TPokemonStatList } from '../PokemonStatList';
import PokemonTypes, { TPokemonTypes } from '../PokemonTypes';

import styles from './PokemonCard.module.less';
import colors from './PokemonColors.module.less';

enum PokemonBackground {
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
  const colorClassName = useMemo(() => getClassNameBackgroundPokemon(randomInteger(0, 4)), []);

  return (
    <div className={styles.card} onClick={onClick} onKeyPress={onClick} role="menuitem" tabIndex={0}>
      <div className={styles.card__info}>
        <h3 className={styles.card__slogan}>{name}</h3>
        <div className={styles.card__stats}>
          <PokemonStatList stats={stats} offset={2} isGridColumn />
        </div>
        <div>
          <PokemonTypes types={types} />
        </div>
      </div>
      <div className={`${styles.card__gallery} ${colorClassName}`}>
        <img className={styles.card__image} src={img} alt={name} />
      </div>
    </div>
  );
};

PokemonCard.defaultProps = {
  onClick: () => {},
};

export const getClassNameBackgroundPokemon = (name: PokemonBackground | undefined) => {
  switch (name) {
    case PokemonBackground.SUCCESS:
      return `${colors.pokemonBackground_success}`;
    case PokemonBackground.INFO:
      return `${colors.pokemonBackground_info}`;
    case PokemonBackground.ERROR:
      return `${colors.pokemonBackground_error}`;
    case PokemonBackground.WARNING:
      return `${colors.pokemonBackground_warning}`;
    case PokemonBackground.ROSE:
      return `${colors.pokemonBackground_rose}`;

    default:
      return '';
  }
};

export const randomInteger: TRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default PokemonCard;
