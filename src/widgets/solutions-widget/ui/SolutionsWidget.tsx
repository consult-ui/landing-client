import { SolutionsList } from '@/entities/solutions-list';

export const SolutionsWidget: React.FC = () => {
  return (
    <div>
      <p>– наша миссия</p>
      <h2>Какие проблемы мы решаем?</h2>
      <SolutionsList />
    </div>
  );
};
