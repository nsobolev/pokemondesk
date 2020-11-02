import React from 'react';

import styles from './App.module.less';
import './custom.less';

export const App = () => {
  return (
    <div className={`${styles.header} color`}>
      This is App Component!
    </div>
  )
};