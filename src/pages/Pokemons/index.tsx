import React from 'react';

import styles from './Pokemons.module.less';

const PokemonsPage = () => {
  return (
    <div className={styles.pokemons}>
      <div className={`${styles.pokemons__container} container`}>Pokemons Page</div>
    </div>
  );
};

export default PokemonsPage;
