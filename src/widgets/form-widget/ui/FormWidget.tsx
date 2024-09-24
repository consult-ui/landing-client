import { Container } from '@/shared/ui/container/ui/Container';

import { RequestForm } from '@/features/request-form';

import styles from './FormWidget.module.scss';

export const FormWidget = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <h2>Оставьте заявку</h2>
          <p className={styles.description}>
            Понравилось предложение? Остались вопросы? Свяжитесь с нами, оставив
            контактные данные. Наши менеджеры свяжутся с Вами в ближайшее время.
          </p>

          <p className={styles.contactUs}>Или свяжитесь с нами напрямую:</p>
          <div className={styles.contactWrapper}>
            <div className={styles.contact}>
              <ul>
                <li>
                  <a href="">Telegram</a> |
                </li>
                <li>
                  <a href="">WhatsApp</a> |
                </li>
                <li>
                  <a href="">Viber</a>
                </li>
              </ul>
              <a href="tel:79999999999">+7 (999) 999 99 99</a>
            </div>
            <div className={styles.contact}>
              <p>E-Mail</p>
              <a href="mailto:consalt-ai@gmail.com">consalt-ai@gmail.com</a>
            </div>
          </div>
        </div>

        <RequestForm />
      </Container>
    </section>
  );
};
