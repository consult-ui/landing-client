import React from 'react';

import { BenefitItem, IBenefit } from '@/shared/ui/benefit-item/ui/BenefitItem';

import styles from './BenefitsList.module.scss';

interface IProps {
  items: IBenefit[];
}

export const BenefitsList = ({ items }: IProps) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item, i) => (
        <li key={i}>
          <BenefitItem {...item} />
        </li>
      ))}
    </ul>
  );
};
