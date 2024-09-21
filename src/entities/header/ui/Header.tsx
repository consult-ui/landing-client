import React from 'react';

import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <HeaderLogo />
    </header>
  );
};
