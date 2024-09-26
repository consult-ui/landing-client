'use client';

import { useEffect, useState } from 'react';
import React from 'react';

import { Button } from '@/shared/ui/button';

import styles from './RequestForm.module.scss';

export const RequestForm = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // form validation
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // fetch validation
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  // Регулярные выражения для валидации
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRegex = /^\d{10,15}$/; // только цифры длина от 10 до 15 символов

  const validateEmail = (email: string) => {
    if (email && !emailRegex.test(email)) {
      setEmailError('Неверный формат почты');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePhone = (phone: string) => {
    if (phone && !phoneRegex.test(phone)) {
      setPhoneError('Неверный формат номера телефона');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  useEffect(() => {
    if (
      checkbox &&
      name &&
      ((email && validateEmail(email)) || (phone && validatePhone(phone)))
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [checkbox, name, email, phone]);

  const sendForm = async () => {
    try {
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

      if (response.ok) {
        setSent(true);
      }
    } catch {
      setError(true);
      setSent(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id={'user-form'} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name-input">ФИО</label>
        <input
          id="name-input"
          type="text"
          placeholder="Иванов Иван Иванович"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="email-input">Почта</label>
        <input
          id="email-input"
          type="email"
          placeholder="email@mail.ru"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {emailError && <div className={styles.error}>{emailError}</div>}
      </div>

      <div className={`${styles.inputWrapper} ${styles.phoneInputWrapper}`}>
        <label>Номер телефона</label>
        <input
          id="tel-input"
          type="tel"
          placeholder="71234567899"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            validatePhone(e.target.value);
          }}
        />
        {phoneError && <div className={styles.error}>{phoneError}</div>}
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

      <div className={styles.buttonsWrapper}>
        {sent ? (
          <div>Ваша заявка отправлена!</div>
        ) : (
          <Button
            disabled={
              !isValid ||
              phoneError !== '' ||
              emailError !== '' ||
              loading ||
              sent
            }
            onClick={sendForm}
          >
            Отправить заявку
          </Button>
        )}

        {loading && <div className={styles.spinner}></div>}
        {error && (
          <div className={styles.error}>
            Произошла ошибка! Попробуйте отправить заявку снова
          </div>
        )}
      </div>
    </form>
  );
};
