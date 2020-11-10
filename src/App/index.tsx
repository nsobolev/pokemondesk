import React from 'react';

import styles from './App.module.less';

import Pages from '../pages';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapper__content}>
        <Pages />
      </div>
      <Footer />
    </div>
  );
};

export default App;
