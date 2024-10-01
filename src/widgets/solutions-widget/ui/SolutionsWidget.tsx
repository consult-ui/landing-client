import BlockHeader from '@/shared/ui/block-header';

import { SolutionsList } from '@/entities/solutions-list';

import styles from './SolutionsWidget.module.scss';

export const SolutionsWidget = () => {
  return (
    <div className={styles.wrapper}>
      <BlockHeader title="Какие проблемы мы решаем?" subtitle="- наша миссия" />
      <SolutionsList />
    </div>
  );
};
