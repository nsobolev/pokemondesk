import React from 'react';

import styles from './NotFound.module.less';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__container}>404 - pages not founds</div>
    </div>
  );
};

export default NotFound;
