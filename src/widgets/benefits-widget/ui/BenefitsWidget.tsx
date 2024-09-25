import { Container } from '@/shared/ui/container/ui/Container';

import { BenefitsList } from '@/entities/benefits-list';

import { MAIN_BENEFITS_LIST } from '../const';
import styles from './BenefitsWidget.module.scss';

export const BenefitsWidget = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.wrapper}>
        <div>
          <p>– наша ценность</p>
          <h2>Главные преимущества</h2>
          <p className={styles.description}>
            Одним из ключевых факторов при разработке, была идея создания
            общедоступного и простого в использовании продукта, которым сможет
            пользоваться любой человек, имеющий минимальный уровень работы с
            похожими приложениями.
          </p>
        </div>

        <BenefitsList items={MAIN_BENEFITS_LIST} />
      </Container>
    </section>
  );
};
