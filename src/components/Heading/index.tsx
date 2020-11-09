import React, { FC } from 'react';

import styles from './Heading.module.less';

type HeadingProps = {
  children: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: FC<HeadingProps> = ({ children, level }) => {
  switch (level) {
    case 1:
      return <h1 className={styles.heading__1}>{children}</h1>;
    case 2:
      return <h2 className={styles.heading__2}>{children}</h2>;
    case 3:
      return <h3 className={styles.heading__3}>{children}</h3>;
    case 4:
      return <h4 className={styles.heading__4}>{children}</h4>;
    case 5:
      return <h5 className={styles.heading__5}>{children}</h5>;
    case 6:
      return <h6 className={styles.heading__6}>{children}</h6>;
    default:
      return <h2 className={styles.heading__2}>{children}</h2>;
  }
};

export default Heading;
