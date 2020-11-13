import React from 'react';
import { useRoutes } from 'hookrouter';

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
  title: string;
  link: LinksMenu;
  component: () => JSX.Element;
};

type TAccMenu = {
  [n: string]: () => JSX.Element;
};

export const menu: TMenu[] = [
  {
    title: 'Home',
    link: LinksMenu.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinksMenu.POKEDEX,
    component: () => <PokemonsPage />,
  },
  {
    title: 'Legendaries',
    link: LinksMenu.LEGENDARIES,
    component: () => <NotFound />,
  },
  {
    title: 'Documentation',
    link: LinksMenu.DOCUMENTATION,
    component: () => <NotFound />,
  },
];

const routes = menu.reduce((acc: TAccMenu, item: TMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

const Pages = () => {
  const match = useRoutes(routes);

  return match || <NotFound />;
};

export default Pages;
