import styles from './BenefitItem.module.scss';

export interface IBenefit {
  title: string;
  description: string;
}

export const BenefitItem: React.FC<IBenefit> = ({
  title,
  description,
}: IBenefit) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
