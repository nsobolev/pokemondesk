import React from 'react';

import styles from './ParallaxImage.module.less';
import { useScreenCursorCoordinates } from '../../hooks';

type ParallaxImageProps = {
  url: string;
  alt: string;
  offsetX: number;
  offsetY: number;
  className?: string;
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({ url, alt, className, offsetX, offsetY }) => {
  const { screenX, screenY } = useScreenCursorCoordinates();

  return (
    <div className={`${className}`} style={{ transform: `translate(${screenX * offsetX}px, ${screenY * offsetY}px)` }}>
      <img className={styles.parallaxImage__image} src={url} alt={alt} />
    </div>
  );
};

ParallaxImage.defaultProps = {
  className: '',
};

export default ParallaxImage;
