import React from 'react';
import PokemonList from '../../components/Pokemons/PokemonList';

import styles from './Pokemons.module.less';
import { usePokemons } from '../../hooks';

import Loader from '../../components/Common/Loader';
import Pagination from '../../components/Common/Pagination';

const PokemonsPage = () => {
  const { total, pokemons, isError, isLoading } = usePokemons();

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>
        <Loader isLoading={isLoading}>
          <>
            <h2 className={styles.pokemons__slogan}>{total} Pokemons for you to choose your favorite</h2>
            <div className={styles.pokemons__search}>Поиск</div>
            <div className={styles.pokemons__filter}>Фильтры</div>
            <div className={styles.pokemons__cards}>
              <PokemonList pokemons={pokemons} />
            </div>
            <div>
              <Pagination totalItems={total} itemsPerPage={Number(process.env.POKEMONS_LIMIT)} />
            </div>
          </>
        </Loader>
      </div>
    </div>
  );
};

export default PokemonsPage;
