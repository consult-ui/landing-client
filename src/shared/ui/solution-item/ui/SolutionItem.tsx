import Image from 'next/image';

import arrow from '@/shared/assets/arrow-left.svg';

import styles from './SolutionItem.module.scss';

type Props = {
  isActive?: boolean;
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
};

export const SolutionItem = ({
  title,
  isActive,
  description,
  image,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.wrapper} ${isActive && styles.isActive}`}
    >
      <div className={styles.textWrapper}>
        <h3 title={title}>{title}</h3>
        {isActive && <p title={description}>{description}</p>}
      </div>
      {!isActive && <Image className={styles.arrow} src={arrow} alt={title} />}
      {isActive && (
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={image}
            alt={'Consult Ai точно знает про: ' + title}
          />
        </div>
      )}
    </div>
  );
};
