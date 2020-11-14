import React, { FC, PropsWithChildren } from 'react';

import styles from './Loader.module.less';
import LoaderSVG from './assets/pikachu.svg';

type TLoaderProps = {
  isLoading: boolean;
  description?: string;
  isDescription?: boolean;
};

const Loader: FC<PropsWithChildren<TLoaderProps>> = ({ isLoading, isDescription, description, children }) => {
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.loader__container}>
          <div className={styles.loader__gallery}>
            <div className={styles.loader__animation}>
              <img className={styles.loader__image} src={LoaderSVG} alt="Loader App" />
            </div>
          </div>
          {isDescription && <p className={styles.loader__description}>{description}</p>}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

Loader.defaultProps = {
  isDescription: true,
  description: 'Loading data...',
};

export default Loader;
