import { SolutionItem } from '@/shared/ui/solution-item';

import { SOLUTION_LIST } from '../const';
import { SolutionItem } from '@/shared/ui/solution-item';

import { SOLUTION_LIST } from '../const';

export const SolutionsList: React.FC = () => {
  return (
    <ul>
      {SOLUTION_LIST.map((solution, index) => (
        <li key={index}>
          <SolutionItem {...solution} />
        </li>
      ))}
    </ul>
  );
};
