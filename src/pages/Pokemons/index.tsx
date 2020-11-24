import React, { useState, useEffect } from 'react';
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
  const { data, isError, isLoading } = useData({
    endPoint: 'getPokemons',
    query: { name: String(value), limit: String(process.env.POKEMONS_LIMIT) },
    deps: [value],
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const pokemonId = parseInt(id, 10);
    if (pokemonId) {
      showModal(pokemonId);
    }
  }, [id]);

  const showModal = (id: number) => {
    history.push(`${LinksMenu.POKEDEX}/${id}`);
    setModalIsOpen((_) => true);
  };

  const closeModal = () => {
    setModalIsOpen((_) => false);
    history.push(LinksMenu.POKEDEX);
  };

  const onClickCard = (id: number) => {
    showModal(id);
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
      {modalIsOpen && id && <PokemonModal id={id} isOpen={modalIsOpen} setIsClose={closeModal} />}
    </div>
  );
});

export default PokemonsPage;
