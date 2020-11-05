import React from 'react';
import styles from './Header.module.less';

import Logo from '../Logo';
import Menu from '../Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <div className={styles.header__menu}>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
