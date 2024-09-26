'use client';

import { FormEvent, useState } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './RequestForm.module.scss';

const errMessage = 'Ошибка отправки формы, пожалуйста, напишите нам в Телеграм';

export const RequestForm = () => {
  const [checkbox, setCheckbox] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // fetch validation
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [error, setError] = useState('');

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!checkbox) {
        throw new Error(
          'Нужно согласиться с условиями обработки персональных данных',
        );
      }

      if (!phone && !email) {
        throw new Error('Нужно заполнить Email или Номер телефона!');
      }

      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      if (email !== '') {
        formData.append('email', email);
      }

      if (phone !== '') {
        formData.append('phone', phone);
      }

      const response = await fetch(
        'https://consult-app-5m2kz.ondigitalocean.app/api/v1/form/submit-form',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (response?.ok) {
        setSended(true);
      } else {
        throw new Error(errMessage);
      }
    } catch (err) {
      console.log(err);
      setError((err as Error)?.message || errMessage);
      setSended(false);
    } finally {
      setLoading(false);
    }
  };

  if (sended) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className={styles.sendedTitle}>Ваша форма успешно отправлена!</h2>
        <p className={styles.sended}>
          В течение двух часов с вами свяжутся наши менеджеры, и вы сможете
          задать им все интересующие вас вопросы или обсудить условия
          сотрудничества. Хорошего дня! С уважением, команда <b>Consult Ai.</b>
        </p>
      </div>
    );
  }

  return (
    <form id={'user-form'} className={styles.form} onSubmit={sendForm}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">ФИО</label>
        <input
          id="name"
          type="text"
          placeholder="Иванов Иван Иванович"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="email">Почта</label>
        <input
          required={!phone}
          id="email"
          type="email"
          placeholder="email@mail.ru"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.phoneInputWrapper}`}>
        <label htmlFor="tel">Номер телефона</label>
        <input
          required={!email}
          id="phone"
          type="tel"
          placeholder="+79876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div
        className={styles.checkboxWrapper}
        onClick={() => setCheckbox((prev) => !prev)}
      >
        <div className={styles.checkbox}>{checkbox && <div></div>}</div>
        <label>
          Я соглашаюсь с <a href="">условиями обработки персональных данных</a>
        </label>
        <input
          defaultChecked={checkbox}
          hidden
          id="agreement-input"
          type="checkbox"
        />
      </div>

      <Button disabled={loading} type="submit">
        {loading ? 'Загрузка...' : 'Отправить заявку'}
      </Button>

      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};
