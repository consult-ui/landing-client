'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './RequestForm.module.scss';

export const RequestForm = () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name-input">ФИО</label>
        <input
          id="name-input"
          type="text"
          placeholder="Иванов Иван Иванович"
          required
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="email-input">Почта</label>
        <input
          id="email-input"
          type="email"
          placeholder="email@mail.ru"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Номер телефона</label>
        <input
          id="tel-input"
          type="tel"
          placeholder="+7 (999) 999 99 99"
          required
        />
      </div>
      <div
        className={styles.checkboxWrapper}
        onClick={() => setCheckbox((prev) => !prev)}
      >
        <div className={styles.checkbox}>{checkbox && <div></div>}</div>
        <label>Я соглашаюсь с условиями обработки персональных данных</label>
        <input
          defaultChecked={checkbox}
          hidden
          id="agreement-input"
          type="checkbox"
          required
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <Button type="submit">Отправить заявку</Button>
        <Button variant="outlined">Отправить заявку</Button>
      </div>
    </form>
  );
};
