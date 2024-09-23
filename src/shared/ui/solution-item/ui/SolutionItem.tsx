import Image from 'next/image';

import arrow from '@/shared/assets/arrow-left.svg';

import styles from './SolutionItem.module.css';

export interface IProps {
  isActive?: boolean;
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export const SolutionItem: React.FC<IProps> = ({
  title,
  isActive,
  description,
  image,
  onClick,
}: IProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.wrapper} ${isActive && styles.isActive}`}
    >
      <div className={styles.textWrapper}>
        <h3>{title}</h3>
        {isActive && <p>{description}</p>}
      </div>
      {!isActive && <Image src={arrow} alt="arrow" />}
      {isActive && (
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={image} alt={title} />
        </div>
      )}
    </div>
  );
};
