'use client';

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
  function scrollToForm() {
    const form = document.getElementById('user-form');

    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
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
                <Link title="Consult Ai - Наша миссия" href={'/'}>
                  Наша миссия
                </Link>
              </li>
              <li>
                <Link title="Consult Ai - Индивидуальность" href={'/'}>
                  Индивидуальность
                </Link>
              </li>
              <li>
                <Link title="Consult Ai - Наши преимущества" href={'/'}>
                  Наши преимущества
                </Link>
              </li>
              <li>
                <Link title="Consult Ai - Связаться с нами" href={'/'}>
                  Связаться с нами
                </Link>
              </li>
              <li>
                <Link title="Consult Ai - Вопрос-ответ" href={'/'}>
                  Вопрос-ответ
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.contacts}>
            <h6 title="Мы ответим в течение двух часов и обговорим все условия сотрудничества">
              Свяжитесь с нами
            </h6>
            <article>
              <small>Телефон</small>
              <a title="Наш телефон для связи" href="tel:+79689415787">
                +7 (968) 941-57-87
              </a>
            </article>
            <article>
              <small>E-Mail</small>
              <a href="mailto:consalt-ai@gmail.com">consalt-ai@gmail.com</a>
            </article>
          </div>

          <div className={styles.messengers}>
            <h6>Мы в мессенджерах</h6>
            <div>
              <a
                href={'https://t.me/consult_ai_help'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в Viber'}
              >
                <Image src={viber} alt={'Связаться с нами в Viber'} />
              </a>
              <a
                href={'https://t.me/consult_ai_help'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в Telegram'}
              >
                <Image src={telegram} alt={'Связаться с нами в Telegram'} />
              </a>
              <a
                href={'https://t.me/consult_ai_help'}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в WhatsApp'}
              >
                <Image src={whatsApp} alt={'Связаться с нами в WhatsApp'} />
              </a>
            </div>
          </div>

          <Button
            variant="outlined"
            title="Заполните форму, наши менеджеры свяжуться с вами в течение двух часов"
            onClick={scrollToForm}
          >
            Оставить заявку
          </Button>
        </nav>

        <nav className={styles.bottomNav}>
          <p>© 2024 Все права защищены</p>
        </nav>
      </Container>
    </footer>
  );
};
