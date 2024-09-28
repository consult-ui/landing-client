import styles from './Button.module.scss';

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends Button {
  variant?: 'outlined' | 'contained';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = (props: IProps) => {
  const { variant = 'contained', size = 'md', children, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${props.disabled && styles.disabled} ${props.className ? styles[props.className] : ''}}`}
      disabled={props.disabled}
      onClick={props.onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
