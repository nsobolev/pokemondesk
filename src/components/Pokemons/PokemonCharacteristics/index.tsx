import React, { FC } from 'react';
import * as ProgressBar from '../../Common/ProgressBar';

import styles from './PokemonCharacteristics.module.less';

type TPokemonCharacteristic = {
  name: string;
  value: number;
  maxValue: number;
};

type TPokemonCharacteristicsList = {
  characteristics: TPokemonCharacteristic[];
};

const PokemonCharacteristics: FC<TPokemonCharacteristicsList> = ({ characteristics }) => {
  return (
    <ul className={styles.characteristics}>
      {characteristics.map((characteristic, index) => (
        <li key={`${characteristic.name}_${index}`} className={styles.characteristics__item}>
          <h3 className={styles.characteristics__slogan}>{characteristic.name}</h3>
          <p className={styles.characteristics__value}>{characteristic.value}</p>
          <div>
            <ProgressBar.View
              value={characteristic.value}
              maxValue={characteristic.maxValue}
              color={index % 2 ? ProgressBar.ProgressColor.WARNING : null}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PokemonCharacteristics;
