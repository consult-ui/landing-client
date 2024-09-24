'use client';

import { useState } from 'react';

import Image from 'next/image';

import arrow from '@/shared/assets/arrow-left.svg';
import { Container } from '@/shared/ui/container/ui/Container';

import { QUESTIONS_DATA } from '@/widgets/questions-widget/data';

import styles from './QuestionsWidget.module.css';

export const QuestionsWidget = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <Container className={styles.wrapper}>
      <h2>Вопрос-ответ</h2>
      <ul>
        {QUESTIONS_DATA.map(({ id, text, title }) => (
          <li
            onClick={() => setIsActive(id)}
            className={isActive === id ? styles.active : ''}
            key={id}
          >
            <header>
              <h3>{title}</h3>
              <Image src={arrow} alt="arrow" />
            </header>
            {isActive === id && <span>{text}</span>}
          </li>
        ))}
      </ul>
    </Container>
  );
};
