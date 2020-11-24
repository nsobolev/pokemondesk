import React, { FC } from 'react';
import styles from './ProgressBar.module.less';

type TProgressProps = {
  value: number;
  maxValue: number;
  color?: ProgressColor | null;
};

export enum ProgressColor {
  DEFAULT,
  WARNING,
}

export const View: FC<TProgressProps> = ({ value, maxValue, color }) => {
  const percent = Math.floor((value * 100) / maxValue);

  return (
    <div className={styles.progress}>
      <div className={styles.progress__bar}>
        <div className={`${styles.progress__line} ${getColor(color)}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

const getColor = (color: ProgressColor | null | undefined) => {
  switch (color) {
    case ProgressColor.WARNING:
      return styles.progress__line_warning;
    case ProgressColor.DEFAULT:
    default:
      return '';
  }
};

export default View;
