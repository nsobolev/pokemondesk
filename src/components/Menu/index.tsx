import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Menu.module.less';

type MenuItem = {
  id: number;
  name: string;
  link: string;
  exact?: boolean;
};
type MenuItems = MenuItem[];

const menuItems: MenuItems = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    exact: true,
  },
  {
    id: 2,
    name: 'Pokédex',
    link: '/pokemons',
  },
  {
    id: 3,
    name: 'Legendaries',
    link: '/legendars',
  },
  {
    id: 4,
    name: 'Documentation',
    link: '/documentation',
  },
];

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu__list}>
        {menuItems.map(({ id, name, link, exact = false }) => (
          <li className={styles.menu__item} key={id}>
            <NavLink
              exact={exact}
              className={styles.menu__link}
              activeClassName={styles.menu__link_state_active}
              to={link}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
