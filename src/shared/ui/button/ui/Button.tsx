import styles from './Button.module.scss';

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends Button {
  variant?: 'outlined' | 'contained';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: IProps) => {
  const { variant = 'contained', children, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${props.disabled && styles.disabled} ${props.className ? styles[props.className] : ''}}`}
      disabled={props.disabled}
      onClick={props.onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
