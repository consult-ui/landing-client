'use client';

import { Raleway } from 'next/font/google';
import Image from 'next/image';

import chat from '@/shared/assets/chat.png';
import { Button } from '@/shared/ui/button';

import styles from './OfferWidget.module.scss';

const raleway = Raleway({ subsets: ['latin'] });

export const OfferWidget = () => {
  function scrollToForm() {
    const form = document.getElementById('user-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

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
          <b>Чтобы получить консультацию или приобрести продукт:</b>
        </p>
        <div className={styles.buttonWrapper}>
          <Button variant={'contained'} onClick={scrollToForm}>
            Оставьте заявку
          </Button>
          <Button variant={'outlined'}>Напишите в Telegram</Button>
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
