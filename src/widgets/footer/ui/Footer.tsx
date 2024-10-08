'use client';

import Image from 'next/image';

import telegram from '@/shared/assets/telegram.svg';
import viber from '@/shared/assets/viber.svg';
import whatsApp from '@/shared/assets/whatsapp.svg';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container/ui/Container';
import { HeaderLogo } from '@/shared/ui/header-logo';
import { scrollTo } from '@/shared/utils/scrollTo';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <Container className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <HeaderLogo />
            <small>
              Conuslt ai — простые инновации для сложных задач вашего бизнеса
            </small>
          </div>

          <div className={styles.contacts}>
            <h6 title="Мы ответим в течение двух часов и обговорим все условия сотрудничества">
              Свяжитесь с нами
            </h6>
            <article>
              <small>Телефон</small>
              <a
                title="Наш телефон для связи"
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              >
                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
              </a>
            </article>
            <article>
              <small>E-Mail</small>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </article>
          </div>

          <div className={styles.messengers}>
            <h6>Мы в мессенджерах</h6>
            <div>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в Telegram'}
              >
                <Image src={telegram} alt={'Связаться с нами в Telegram'} />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP}
                rel="noreferrer"
                target="_blank"
                title={'Связаться с нами в WhatsApp'}
              >
                <Image src={whatsApp} alt={'Связаться с нами в WhatsApp'} />
              </a>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                title={'Связаться с нами в Viber'}
              >
                <Image src={viber} alt={'Связаться с нами в Viber'} />
              </a>
            </div>
          </div>

          <Button
            variant="outlined"
            title="Заполните форму, наши менеджеры свяжуться с вами в течение двух часов"
            onClick={() => scrollTo('user-form')}
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
