import { SolutionsList } from '@/entities/solutions-list';

import styles from './SolutionsWidget.module.css';

export const SolutionsWidget: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mission}>– наша миссия</p>
      <h2>Какие проблемы мы решаем?</h2>
      <SolutionsList />
    </div>
  );
};
