import React from 'react';

import styles from './App.module.less';
import './custom.less';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__content} />
      <Footer />
    </div>
  );
};

export default App;
