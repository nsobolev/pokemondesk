import React from 'react';
import { useRoutes } from 'hookrouter';

import HomePage from './Home';
import PokemonsPage from './Pokemons';
import NotFound from './NotFound';

export type TMenu = {
  title: string;
  link: string;
  component: () => JSX.Element;
};

type TAccMenu = {
  [n: string]: () => JSX.Element;
};

export const menu: TMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokemons',
    component: () => <PokemonsPage />,
  },
  {
    title: 'Legendaries',
    link: '/legendars',
    component: () => <NotFound />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
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
