import { CSSProperties } from 'react';

import styles from './BlockHeader.module.css';

type Props = {
  title: string;
  subtitle?: string;
  style?: CSSProperties;
};

const BlockHeader = ({ title, subtitle, style }: Props) => {
  return (
    <header className={styles.wrapper} style={style}>
      {subtitle && <p>{subtitle}</p>}
      <h2 title="Consult Ai - Главные преимущества">{title}</h2>
    </header>
  );
};

export default BlockHeader;
