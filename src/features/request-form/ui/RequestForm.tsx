'use client';

import { FormEvent, useEffect, useState } from 'react';

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

      const response = await fetch(process.env.NEXT_PUBLIC_FORM_URL as string, {
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          phone_number: phone,
        }),
      });

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

  useEffect(() => {
    if (window.localStorage.getItem('sendedForm') === 'true') {
      setSended(true);
    }
  }, []);

  useEffect(() => {
    if (sended) {
      window.localStorage.setItem('sendedForm', 'true');
    }
  }, [sended]);

  if (sended) {
    return (
      <div
        id={'user-form'}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h2 className={styles.sendedTitle}>Ваша форма успешно отправлена!</h2>
        <p className={styles.sended}>
          В течение двух часов с вами свяжутся наши менеджеры, и вы сможете
          задать им все интересующие вас вопросы или обсудить условия
          сотрудничества. <br />
          Хорошего дня! <br /> <br /> С уважением, команда <b>Consult Ai.</b>
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
          Я соглашаюсь с <b>общими условиями обработки персональных данных</b>
        </label>
        <input
          defaultChecked={checkbox}
          hidden
          id="agreement-input"
          type="checkbox"
        />
      </div>

      <div>
        <Button disabled={loading} type="submit">
          {loading ? 'Загрузка...' : 'Отправить заявку'}
        </Button>
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};
