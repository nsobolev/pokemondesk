import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import PokemonList from '../../components/Pokemons/PokemonList';
import PokemonModal from '../../components/Pokemons/PokemonModal';
import SearchInput from '../../components/Common/SearchInput';

import styles from './Pokemons.module.less';
import { useData, useValue } from '../../hooks';
import { LinksMenu } from '../index';

import Loader from '../../components/Common/Loader';

type TUseParams = {
  id: string;
};

const PokemonsPage = React.memo(() => {
  const history = useHistory();
  const { id } = useParams<TUseParams>();

  const { value, setValue } = useValue('');
  const { data, isError, isLoading } = useData(
    'getPokemons',
    { name: String(value), limit: String(process.env.POKEMONS_LIMIT) },
    [value],
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen((_) => true);
  };

  const closeModal = () => {
    setModalIsOpen((_) => false);
    history.push(LinksMenu.POKEDEX);
  };

  const onClickCard = (id: number) => {
    history.push(`${LinksMenu.POKEDEX}/${id}`);
    showModal();
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>
        <Loader isLoading={!data?.pokemons && isLoading}>
          <h2 className={styles.pokemons__slogan}>{data?.total} Pokemons for you to choose your favorite</h2>
          <div className={styles.pokemons__search}>
            <SearchInput value={value} onChange={setValue} placeholder="Search pokemons" />
          </div>
          <div className={styles.pokemons__filter}>Фильтры</div>
          <div className={styles.pokemons__cards}>
            <Loader isLoading={Boolean(data?.pokemons) && isLoading} withContent>
              <PokemonList pokemons={data?.pokemons} onClickAt={onClickCard} />
            </Loader>
          </div>
        </Loader>
      </div>
      {modalIsOpen && id && <PokemonModal id={id} isOpen={modalIsOpen} setIsOpen={showModal} setIsClose={closeModal} />}
    </div>
  );
});

export default PokemonsPage;
