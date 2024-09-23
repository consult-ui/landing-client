import { Container } from '@/shared/ui/container/ui/Container';

import styles from './FormWidget.module.scss';

export const FormWidget: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div>
          <h2>Оставьте заявку</h2>
          <p>
            Понравилось предложение? Остались вопросы? Свяжитесь с нами, оставив
            контактные данные. Наши менеджеры свяжутся с Вами в ближайшее время.
          </p>
          <p>Или свяжитесь с нами напрямую:</p>
          <div>
            <p>Telegram | WhatsApp | Viber</p>
            <a href="tel:79999999999">+7 (999) 999 99 99</a>
          </div>
          <div>
            <p>E-Mail</p>
            <a href="mailto:consalt-ai@gmail.com">consalt-ai@gmail.com</a>
          </div>
        </div>

        <form></form>
      </Container>
    </section>
  );
};
