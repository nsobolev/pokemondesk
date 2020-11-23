import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Home';
import PokemonsPage from './Pokemons';
import NotFound from './NotFound';

export enum LinksMenu {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendars',
  DOCUMENTATION = '/documentation',
}

export type TMenu = {
  id: number;
  title: string;
  linkMenu?: LinksMenu;
  link: LinksMenu | string;
  exact?: boolean;
  component: JSX.Element;
};

export const menu: TMenu[] = [
  {
    id: 1,
    title: 'Home',
    linkMenu: LinksMenu.HOME,
    link: LinksMenu.HOME,
    exact: true,
    component: <HomePage />,
  },
  {
    id: 2,
    title: 'Pokédex',
    linkMenu: LinksMenu.POKEDEX,
    link: `${LinksMenu.POKEDEX}/:id?`,
    component: <PokemonsPage />,
  },
  {
    id: 3,
    title: 'Legendaries',
    linkMenu: LinksMenu.LEGENDARIES,
    link: LinksMenu.LEGENDARIES,
    component: <NotFound />,
  },
  {
    id: 4,
    title: 'Documentation',
    linkMenu: LinksMenu.DOCUMENTATION,
    link: LinksMenu.DOCUMENTATION,
    component: <NotFound />,
  },
];

const Pages = () => {
  return (
    <Switch>
      {menu.map((item) => (
        <Route key={item.id} exact={item.exact} path={item.link}>
          {item.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Pages;
