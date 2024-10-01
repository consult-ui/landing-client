import BlockHeader from '@/shared/ui/block-header';
import { Container } from '@/shared/ui/container/ui/Container';

import { RequestForm } from '@/features/request-form';

import styles from './FormWidget.module.scss';

export const FormWidget = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.wrapper}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <BlockHeader
              style={{ marginBottom: '1em' }}
              title="Оставьте заявку"
            />
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
                    <a
                      title="Написать нам в Telegram"
                      href={process.env.NEXT_PUBLIC_TELEGRAM}
                    >
                      Telegram
                    </a>{' '}
                    |
                  </li>
                  <li>
                    <a
                      title="Написать нам в WhatsApp"
                      href={process.env.NEXT_PUBLIC_WHATSAPP}
                    >
                      WhatsApp
                    </a>{' '}
                    |
                  </li>
                  <li>
                    <a
                      title="Написать нам в Viber"
                      href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                    >
                      Viber
                    </a>
                  </li>
                </ul>
                <a
                  title="Позвонить нам"
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                >
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                </a>
              </div>
              <div className={styles.contact}>
                <p>E-Mail</p>
                <a
                  title="Написать нам на E-Mail"
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
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
