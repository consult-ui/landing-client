import { CSSProperties } from 'react';

import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const Container = ({ children, style, className }: IProps) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`} style={style}>
      {children}
    </div>
  );
};
