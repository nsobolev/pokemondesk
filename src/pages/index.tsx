import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Home';
import PokemonsPage from './Pokemons';
import NotFound from './NotFound';

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/pokemons">
        <PokemonsPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Pages;
