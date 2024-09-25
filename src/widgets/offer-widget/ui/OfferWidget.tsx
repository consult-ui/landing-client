import { Raleway } from 'next/font/google';
import Image from 'next/image';

import chat from '@/shared/assets/chat.png';
import { Button } from '@/shared/ui/button';

import styles from './OfferWidget.module.scss';

const raleway = Raleway({ subsets: ['latin'] });

export const OfferWidget = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={raleway.className}>
          <span>Conuslt ai</span> — простые инновации для сложных задач вашего
          бизнеса
        </h1>
        <p>
          Наше решение помогает автоматизировать повседневные процессы и
          увеличивать эффективность не только сотрудников, но и вашего бизнеса в
          целом!
        </p>
        <div className={styles.buttonWrapper}>
          <Button variant={'contained'}>Заполнить форму</Button>
          <Button variant={'outlined'}>Связаться с нами</Button>
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
