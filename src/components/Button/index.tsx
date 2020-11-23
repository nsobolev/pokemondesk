import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.less';

export enum ColorsButton {
  Danger,
  Success,
}

export enum SizesButton {
  Fluid,
  Small,
}

type ButtonProps = {
  color?: ColorsButton;
  size?: SizesButton;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type LinkProps = {
  color?: ColorsButton;
  size?: SizesButton;
  className?: string;
  to: string;
};

export const ViewLink = ({ color, size, className, children, to }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className={`${styles.button} ${getColor(color)} ${getSize(size)} ${className}`} to={to}>
      {children}
    </Link>
  );
};

export const ViewButton = ({ color, size, onClick, type, className, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`${styles.button} ${getColor(color)} ${getSize(size)} ${className}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

const getColor = (color: ColorsButton | undefined) => {
  switch (color) {
    case ColorsButton.Danger:
      return styles.button_danger;
    case ColorsButton.Success:
      return styles.button_success;
    default:
      return styles.button_default;
  }
};

const getSize = (size: SizesButton | undefined) => {
  switch (size) {
    case SizesButton.Small:
      return styles.button_small;
    case SizesButton.Fluid:
      return styles.button_fluid;
    default:
      return '';
  }
};

ViewButton.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {},
};

ViewLink.defaultProps = {
  className: '',
};
