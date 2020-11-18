import React from 'react';
import PokemonList from '../../components/Pokemons/PokemonList';
import SearchInput from '../../components/Common/SearchInput';

import styles from './Pokemons.module.less';
import { useData, useValue } from '../../hooks';

import Loader from '../../components/Common/Loader';

const PokemonsPage = () => {
  const { value, setValue } = useValue('');
  const { data, isError, isLoading } = useData(
    'getPokemons',
    { name: String(value), limit: String(process.env.POKEMONS_LIMIT) },
    [value],
  );

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
              <PokemonList pokemons={data?.pokemons} />
            </Loader>
          </div>
        </Loader>
      </div>
    </div>
  );
};

export default PokemonsPage;
