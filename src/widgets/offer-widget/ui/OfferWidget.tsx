'use client';

import { Raleway } from 'next/font/google';
import Image from 'next/image';

import chat from '@/shared/assets/chat.webp';
import { Button } from '@/shared/ui/button';
import { scrollTo } from '@/shared/utils/scrollTo';

import styles from './OfferWidget.module.scss';

const raleway = Raleway({ subsets: ['latin'] });

export const OfferWidget = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={raleway.className}>
          <span>Conuslt</span> <span>ai</span> — простые инновации для сложных
          задач вашего бизнеса
        </h1>
        <p>
          Наше решение помогает автоматизировать повседневные процессы и
          увеличивать эффективность не только сотрудников, но и вашего бизнеса в
          целом! <br />{' '}
          <b onClick={() => scrollTo('user-form')}>
            Чтобы получить консультацию или приобрести продукт:
          </b>
        </p>
        <div className={styles.buttonWrapper}>
          <Button
            variant={'contained'}
            onClick={() => scrollTo('user-form')}
            title="Заполните форму, наши менеджеры свяжуться с вами в течение двух часов"
          >
            Оставьте заявку
          </Button>
          <a download href="/files/consalt-pres.pdf">
            <Button
              title="Мы приготовили презентацию с описанием нашего продукта"
              variant={'outlined'}
            >
              Скачать презентацию
            </Button>
          </a>
        </div>
      </div>

      <Image
        className={styles.chat}
        src={chat}
        alt={'Consult Ai - искуственный интеллект для вашего бизнеса'}
      />
    </div>
  );
};
