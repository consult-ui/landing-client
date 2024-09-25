import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container/ui/Container';

import { BenefitsList } from '@/entities/benefits-list';

import { BENEFITS_LIST } from '../const';
import styles from './IndividualWidget.module.scss';

export const IndividualWidget = () => {
  return (
    <div className={styles.section}>
      <Container className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <h2>Индивидуальность</h2>
          <p>
            Платформа полностью адаптируется под уникальные потребности
            конкретного бизнеса. Независимо от того, в какой нише вы работаете,
            Consult-Ai предоставляет именно тот функционал, который необходим
            вам. Каждый совет и каждое решение искусственного интеллекта будут
            основаны на особенностях компании, чтобы максимально точно отражать
            специфику и решать проблемы именно вашего бизнеса.
          </p>
          <div className={styles.btnDesktop}>
            <Button>Решить проблему</Button>
          </div>
        </div>
        <BenefitsList items={BENEFITS_LIST} />
        <div className={styles.btnTablet}>
          <Button>Решить проблему</Button>
        </div>
      </Container>
    </div>
  );
};
