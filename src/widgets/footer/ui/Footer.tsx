import Image from 'next/image';
import Link from 'next/link';

import telegram from '@/shared/assets/telegram.svg';
import viber from '@/shared/assets/viber.svg';
import whatsApp from '@/shared/assets/whatsapp.svg';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container/ui/Container';
import { HeaderLogo } from '@/shared/ui/header-logo';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <HeaderLogo />
            <small>
              Conuslt ai — простые инновации для сложных задач вашего бизнеса
            </small>
          </div>

          <div className={styles.navigation}>
            <h6>Навигация</h6>
            <ul>
              <li>
                <Link href={'/'}>Наша миссия</Link>
              </li>
              <li>
                <Link href={'/'}>Индивидуальность</Link>
              </li>
              <li>
                <Link href={'/'}>Наши преимущества</Link>
              </li>
              <li>
                <Link href={'/'}>Связаться с нами</Link>
              </li>
              <li>
                <Link href={'/'}>Вопрос-ответ</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contacts}>
            <h6>Свяжитесь с нами</h6>
            <article>
              <small>Телефон</small>
              <a href="tel:+79040574145">+7 (904) 057-41-45</a>
            </article>
            <article>
              <small>E-Mail</small>
              <a href="mailto:consalt-ai@gmail.com">consalt-ai@gmail.com</a>
            </article>

            <div className={styles.tabletBtn}>
              <Button variant="outlined">Оставить заявку</Button>
            </div>
          </div>

          <div className={styles.messengers}>
            <h6>Мы в мессенджерах</h6>
            <div>
              <a
                href={'https://t.me/kdubasov'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в Viber'}
              >
                <Image src={viber} alt={'Связаться с нами в Viber'} />
              </a>
              <a
                href={'https://t.me/kdubasov'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в Telegram'}
              >
                <Image src={telegram} alt={'Связаться с нами в Telegram'} />
              </a>
              <a
                href={'https://t.me/kdubasov'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в WhatsApp'}
              >
                <Image src={whatsApp} alt={'Связаться с нами в WhatsApp'} />
              </a>
            </div>
          </div>

          <div className={styles.desktopBtn}>
            <Button variant="outlined">Оставить заявку</Button>
          </div>
        </nav>

        <nav className={styles.bottomNav}>
          <p>© 2024 Все права защищены</p>
          <Link href={'/'}>Условия использования</Link>
          <Link href={'/'}>Политика конфиденциальности</Link>
          <div />
          <div />
        </nav>
      </Container>
    </footer>
  );
};
