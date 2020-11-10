import React from 'react';
import { A, usePath } from 'hookrouter';

import { menu, TMenu } from '../../pages/index';

import styles from './Menu.module.less';

const Menu = () => {
  const path = usePath();

  return (
    <nav>
      <ul className={styles.menu__list}>
        {menu.map(({ title, link }: TMenu) => (
          <li className={styles.menu__item} key={title}>
            <A className={`${styles.menu__link} ${link === path ? styles.menu__link_state_active : ''}`} href={link}>
              {title}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
