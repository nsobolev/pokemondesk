import React from 'react';

import styles from './Footer.module.less';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__description}>
          Make with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
        <p className={styles.footer__copyright}>Ours Team</p>
      </div>
    </footer>
  );
};

export default Footer;
