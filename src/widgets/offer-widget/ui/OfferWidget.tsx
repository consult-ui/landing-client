import { Raleway } from 'next/font/google';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container/ui/Container';

import styles from './OfferWidget.module.css';

const raleway = Raleway({ subsets: ['latin'] });

export const OfferWidget: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.titleWrapper}>
          <h1 className={raleway.className}>
            <span>Conuslt ai</span> — простые инновации для сложных задач вашего
            бизнеса
          </h1>
          <p>
            Наше решение помогает автоматизировать повседневные процессы и
            увеличивать эффективность не только сотрудников, но и вашего бизнеса
            в целом!
          </p>
          <div className={styles.buttonWrapper}>
            <Button variant={'contained'}>Заполнить форму</Button>
            <Button variant={'outlined'}>Связаться с нами</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
