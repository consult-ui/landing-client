import Image from 'next/image';

import logo from '../../../assets/header-logo.svg';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.logo}
        src={logo}
        alt={
          'Consult Ai помогает автоматизировать повседневные процессы и увеличивать эффективность не только сотрудников, но и вашего бизнеса в целом!'
        }
      />
      <p>CONSULT AI</p>
    </div>
  );
};
