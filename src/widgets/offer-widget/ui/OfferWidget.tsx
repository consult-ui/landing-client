import { Open_Sans } from 'next/font/google';

import { Button } from '@/shared/ui/button';

import { ChatBlock } from '@/entities/chat-block';

import styles from './OfferWidget.module.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const OfferWidget: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1 className={openSans.className}>
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

      <ChatBlock />
    </div>
  );
};
