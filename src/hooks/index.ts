import { useEffect, useState } from 'react';

/* eslint-disable import/prefer-default-export */

export const useScreenCursorCoordinates = () => {
  const [state, setState] = useState({
    screenX: 0,
    screenY: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    const { screenX, screenY } = event;
    setState(() => ({ screenX, screenY }));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [state]);

  return state;
};
