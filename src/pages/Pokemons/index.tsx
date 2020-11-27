import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import PokemonList from '../../components/Pokemons/PokemonList';
import PokemonModal from '../../components/Pokemons/PokemonModal';
import SearchInput from '../../components/Common/SearchInput';

import styles from './Pokemons.module.less';
import { useData } from '../../hooks';
import { LinksMenu } from '../index';

import Loader from '../../components/Common/Loader';

type TUseParams = {
  id: string;
};

type TPokemonsData = {
  id: number;
  order: number;
  weight: number;
  height: number;
  name: string;
  name_clean: string;
  base_experience: number;
  is_default: boolean;
  abilities: string[];
  types: string[];
  img: string;
  stats: { [n: string]: number };
};

type TPokemonsRequest = {
  count: number;
  limit: number;
  offset: number;
  total: number;
  pokemons: TPokemonsData[];
};

type TPokemonsState = {
  pokemons: TPokemonsData[];
  value: string;
  offset: number;
};

const PokemonsPage = React.memo(() => {
  const history = useHistory();
  const { id } = useParams<TUseParams>();
  const [state, setState] = useState<TPokemonsState>({
    pokemons: [],
    value: '',
    offset: 0,
  });

  const { data, isError, isLoading } = useData<TPokemonsRequest>({
    endPoint: 'getPokemons',
    query: { name: String(state.value), limit: String(process.env.POKEMONS_LIMIT), offset: String(state.offset) },
    deps: [state.value, state.offset],
  });

  const infiniteListRef: React.RefObject<HTMLUListElement> = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: Boolean(data && data.offset < data.total),
    onLoadMore: () =>
      setState((prevState) => ({ ...prevState, offset: prevState.offset + Number(process.env.POKEMONS_LIMIT) })),
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const pokemonId = parseInt(id, 10);
    if (pokemonId) {
      showModal(pokemonId);
    }
  }, [id]);

  useEffect(() => {
    if (data?.pokemons) {
      setState((prevState) => ({ ...prevState, pokemons: [...state.pokemons, ...data.pokemons] }));
    }
  }, [data?.pokemons]);

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

  const setValue = (inputValue: string) => {
    setState((prevState) => ({ ...prevState, offset: 0, pokemons: [], value: inputValue }));
  };

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>
        <Loader isLoading={Boolean(!data) && isLoading}>
          <h2 className={styles.pokemons__slogan}>{data?.total} Pokemons for you to choose your favorite</h2>
          <div className={styles.pokemons__search}>
            <SearchInput value={state.value} onChange={setValue} placeholder="Search pokemons" />
          </div>
          <div className={styles.pokemons__filter}>Фильтры</div>
          <div className={styles.pokemons__cards}>
            <Loader isLoading={Boolean(data && data.pokemons) && isLoading} withContent>
              <PokemonList ref={infiniteListRef} pokemons={state.pokemons} onClickAt={onClickCard} />
            </Loader>
          </div>
        </Loader>
      </div>
      {modalIsOpen && id && <PokemonModal id={id} isOpen={modalIsOpen} setIsClose={closeModal} />}
    </div>
  );
});

export default PokemonsPage;
