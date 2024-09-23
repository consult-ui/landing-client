import styles from './Button.module.css';

interface IProps {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
}

export const Button = ({ variant = 'contained', children }: IProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
