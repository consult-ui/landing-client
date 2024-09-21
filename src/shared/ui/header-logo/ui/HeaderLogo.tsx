import Image from 'next/image';

import logo from '../../../assets/header-logo.svg';
import styles from './HeaderLogo.module.css';

export const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt={'logo'} />
      <p>CONSULT AI</p>
    </div>
  );
};
