import Image from 'next/image';

import logo from '../../../assets/header-logo.svg';
import styles from './HeaderLogo.module.css';

export const HeaderLogo = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={logo}
        alt={'Consult Ai - искуственный интеллект для вашего бизнеса'}
      />
      <p>CONSULT AI</p>
    </div>
  );
};
