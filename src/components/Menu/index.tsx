import React from 'react';
import { NavLink } from 'react-router-dom';

import { menu, TMenu } from '../../pages/index';

import styles from './Menu.module.less';

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu__list}>
        {menu.map(({ title, linkMenu, exact }: TMenu) => {
          return linkMenu ? (
            <li className={styles.menu__item} key={title}>
              <NavLink
                className={styles.menu__link}
                activeClassName={styles.menu__link_state_active}
                to={linkMenu}
                exact={exact}>
                {title}
              </NavLink>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
