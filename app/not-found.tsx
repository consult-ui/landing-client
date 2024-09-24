import Link from 'next/link';

import type { Metadata } from 'next';

import { Button } from '@/shared/ui/button';
import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Consult Ai | Страница не найдена',
};

const NotFound = () => {
  return (
    <div className={styles.wrapper} data-testid="not-found">
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
