import Image from 'next/image';

import arrow from '@/shared/assets/arrow-left.svg';

import styles from './SolutionItem.module.css';

export interface ISolution {
  isActive: boolean;
  title: string;
  description: string;
  image: string;
}

export const SolutionItem: React.FC<ISolution> = ({
  title,
  isActive,
  description,
  image,
}: ISolution) => {
  return (
    <div className={`${styles.wrapper} ${isActive && styles.isActive}`}>
      <div className={styles.textWrapper}>
        <h3>{title}</h3>
        {isActive && <p>{description}</p>}
      </div>
      {!isActive && <Image src={arrow} alt="arrow" />}
      {isActive && (
        <Image
          className={styles.image}
          width={390}
          height={394}
          src={image}
          alt={title}
        />
      )}
    </div>
  );
};
