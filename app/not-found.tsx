import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <article>
        <HeaderLogo />
        <p>
          Ой, что-то сломалось... Страница не найдена или вовсе не существует
        </p>
        <Link href={'/'}>
          <Button>Вернуться на главную</Button>
        </Link>
      </article>
    </div>
  );
};

export default NotFound;
