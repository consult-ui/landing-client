import { SolutionsList } from '@/entities/solutions-list';

import styles from './SolutionsWidget.module.scss';

export const SolutionsWidget = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mission}>– наша миссия</p>
      <h2>Какие проблемы мы решаем?</h2>
      <SolutionsList />
    </div>
  );
};
