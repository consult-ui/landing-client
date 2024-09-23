import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './HeaderWidget.module.scss';

export const HeaderWidget = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderLogo />
    </div>
  );
};
