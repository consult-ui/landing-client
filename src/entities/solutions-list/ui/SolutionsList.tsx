'use client';

import React from 'react';

import { SolutionItem } from '@/shared/ui/solution-item';

import { SOLUTION_LIST } from '../const';
import styles from './SolutionsList.module.css';

export const SolutionsList = () => {
  const [solutionList] = React.useState(SOLUTION_LIST);
  return (
    <ul className={styles.wrapper}>
      {solutionList.map((solution, index) => (
        <li key={index}>
          <SolutionItem {...solution} />
        </li>
      ))}
    </ul>
  );
};
