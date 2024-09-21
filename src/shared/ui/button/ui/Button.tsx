import React from 'react';

import styles from './Button.module.css';

interface IProps {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  variant = 'contained',
  children,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
