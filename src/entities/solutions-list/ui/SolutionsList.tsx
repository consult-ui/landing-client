'use client';

import { useState } from 'react';

import { SolutionItem } from '@/shared/ui/solution-item';

import { SOLUTION_LIST } from '../const';
import styles from './SolutionsList.module.scss';

export const SolutionsList = () => {
  const [activeItem, setActiveItem] = useState(SOLUTION_LIST[0].id);

  const handleChangeActive = (id: number) => {
    setActiveItem(id);
  };

  return (
    <ul className={styles.wrapper}>
      {SOLUTION_LIST.map((solution) => (
        <li key={solution.id}>
          <SolutionItem
            {...solution}
            onClick={() => handleChangeActive(solution.id)}
            isActive={activeItem === solution.id}
          />
        </li>
      ))}
    </ul>
  );
};
