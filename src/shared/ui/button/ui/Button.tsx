import styles from './Button.module.css';

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends Button {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
}

export const Button = (props: IProps) => {
  const { variant = 'contained', children, ...rest } = props;

  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};
