import React, { FC, useMemo } from 'react';
import { useData } from '../../../hooks';

import Modal, { TModal } from '../../Common/Modal';
import Loader from '../../Common/Loader';

import { getClassNameBackgroundPokemon, randomInteger } from '../PokemonCard';
import PokemonTypes from '../PokemonTypes';
import PokemonStatList from '../PokemonStatList';
import PokemonAbilities from '../PokemonAbilities';
import PokemonCharacteristics from '../PokemonCharacteristics';

import styles from './PokemonModal.module.less';

export type TPokemonModal = TModal & {
  id: string;
};

const PokemonModal: FC<TPokemonModal> = ({ id, isOpen, setIsClose }) => {
  const colorClassName = useMemo(() => getClassNameBackgroundPokemon(randomInteger(0, 4)), []);
  const { data, isLoading } = useData({
    endPoint: 'getPokemon',
    pathname: `/${id}`,
    deps: [id],
  });

  const characteristics = useMemo(
    () => [
      {
        id: 1,
        name: 'Experience',
        value: data?.base_experience,
        maxValue: 300,
      },
      {
        id: 2,
        name: 'Healthy Points',
        value: data?.stats?.hp,
        maxValue: 100,
      },
    ],
    [data, id],
  );

  return (
    <Modal isOpen={isOpen} setIsClose={setIsClose} withoutPadding>
      <div className={styles.pokemonModal}>
        <Loader isLoading={isLoading}>
          <div className={styles.pokemonModal__container}>
            <div className={`${styles.pokemonModal__gallery} ${colorClassName}`}>
              <img className={styles.pokemonModal__image} src={data?.img} alt={data?.name} />
              <div className={styles.pokemonModal__types}>
                <PokemonTypes types={data?.types} />
              </div>
            </div>
            <div className={styles.pokemonModal__content}>
              <h2 className={styles.pokemonModal__slogan}>{data?.name}</h2>
              <div className={styles.pokemonModal__item}>
                <PokemonAbilities abilities={data?.abilities} />
              </div>
              <div className={styles.pokemonModal__item}>
                <PokemonCharacteristics characteristics={characteristics} />
              </div>
              <div className={styles.pokemonModal__item}>
                <PokemonStatList stats={data?.stats} offset={4} />
              </div>
            </div>
          </div>
        </Loader>
      </div>
    </Modal>
  );
};

export default PokemonModal;
