import React from 'react';

import { Container } from '@/shared/ui/container/ui/Container';
import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './HeaderWidget.module.scss';

export const HeaderWidget: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <HeaderLogo />
        </div>
      </Container>
    </header>
  );
};
