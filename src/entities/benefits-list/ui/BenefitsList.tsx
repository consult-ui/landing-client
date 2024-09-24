import { BenefitItem, IBenefit } from '@/shared/ui/benefit-item/ui/BenefitItem';

import styles from './BenefitsList.module.scss';

type Props = {
  items: IBenefit[];
};

export const BenefitsList = ({ items }: Props) => {
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
