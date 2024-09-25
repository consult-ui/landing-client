import styles from './Button.module.scss';

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends Button {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
  className?: string;
}

export const Button = (props: IProps) => {
  const { variant = 'contained', children, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${props.className ? styles[props.className] : ''}}`}
      {...rest}
    >
      {children}
    </button>
  );
};
