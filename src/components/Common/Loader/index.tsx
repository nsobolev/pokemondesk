import React, { FC, PropsWithChildren } from 'react';

import styles from './Loader.module.less';
import LoaderSVG from './assets/pikachu.svg';

type TLoaderProps = {
  isLoading: boolean;
};

const Loader: FC<PropsWithChildren<TLoaderProps>> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.loader__container}>
          <div className={styles.loader__animation}>
            <img className={styles.loader__image} src={LoaderSVG} alt="Loader App" />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
