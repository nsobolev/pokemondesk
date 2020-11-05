import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.less';

export enum StyleButtons {
  Danger,
  Success,
}

type ButtonProps = {
  style: StyleButtons;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
};

type LinkProps = {
  style: StyleButtons;
  className?: string;
  to: string;
};

export const ViewLink = ({ style, className, children, to }: PropsWithChildren<LinkProps>) => {
  return (
    <Link className={`${styles.button} ${getStyling(style)} ${className}`} to={to}>
      {children}
    </Link>
  );
};

export const ViewButton = ({ style, onClick, type, className, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`${styles.button} ${getStyling(style)} ${className}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

const getStyling = (style: StyleButtons) => {
  switch (style) {
    case StyleButtons.Danger:
      return styles.button_danger;
    case StyleButtons.Success:
      return styles.button_success;
    default:
      return styles.button_default;
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
