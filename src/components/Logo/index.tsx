import React from 'react';

import styles from './Logo.module.less';
import LogoUrl from './assets/logo.svg';

const Logo = () => {
  return (
    <div>
      <img className={styles.logo__image} src={LogoUrl} alt="Logo Pokemon company" />
    </div>
  );
};

export default Logo;
