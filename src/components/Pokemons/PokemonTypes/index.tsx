import React, { FC } from 'react';
import * as Button from '../../Button';

import styles from './PokemonTypes.module.less';

export type TPokemonTypes = string[];

export type TPokemonTypesProps = {
  types: TPokemonTypes;
};

const PokemonTypes: FC<TPokemonTypesProps> = ({ types }) => {
  return (
    <ul className={styles.list}>
      {types.map((type) => (
        <li key={type} className={styles.list__item}>
          <Button.ViewButton size={Button.SizesButton.Small} color={Button.ColorsButton.Success}>
            {type}
          </Button.ViewButton>
        </li>
      ))}
    </ul>
  );
};

export default PokemonTypes;
