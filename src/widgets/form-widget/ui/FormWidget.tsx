import { Container } from '@/shared/ui/container/ui/Container';

import { RequestForm } from '@/features/request-form';

import styles from './FormWidget.module.scss';

export const FormWidget = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <h2 title="Оставьте заявку и мы свяжемся с вами в течение двух часов">
              Оставьте заявку
            </h2>
            <p className={styles.description}>
              Понравилось предложение? Остались вопросы? Свяжитесь с нами,
              оставив контактные данные. Наши менеджеры свяжутся с Вами в
              ближайшее время.
            </p>
          </div>

          <div className={styles.contactBlock}>
            <p className={styles.contactUs}>Или свяжитесь с нами напрямую:</p>
            <div className={styles.contactWrapper}>
              <div className={styles.contact}>
                <ul>
                  <li>
                    <a title="Написать нам в Telegram" href="">
                      Telegram
                    </a>{' '}
                    |
                  </li>
                  <li>
                    <a title="Написать нам в WhatsApp" href="">
                      WhatsApp
                    </a>{' '}
                    |
                  </li>
                  <li>
                    <a title="Написать нам в Viber" href="">
                      Viber
                    </a>
                  </li>
                </ul>
                <a title="Позвонить нам" href="tel:79999999999">
                  +7 (999) 999 99 99
                </a>
              </div>
              <div className={styles.contact}>
                <p>E-Mail</p>
                <a
                  title="Написать нам на E-Mail"
                  href="mailto:consalt-ai@gmail.com"
                >
                  consalt-ai@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <RequestForm />
      </Container>
    </section>
  );
};
