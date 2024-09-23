import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface IProps {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button: React.FC<IProps> = ({
  variant = 'contained',
  children,
  type,
}) => {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
