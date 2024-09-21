'use client';

import React from 'react';

import { SolutionItem } from '@/shared/ui/solution-item';

import { SOLUTION_LIST } from '../const';
import styles from './SolutionsList.module.css';

export const SolutionsList = () => {
  const [activeItem, setActiveItem] = React.useState(1);

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
