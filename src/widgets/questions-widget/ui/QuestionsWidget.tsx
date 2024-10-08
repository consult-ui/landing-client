'use client';

import { useState } from 'react';

import Image from 'next/image';

import arrow from '@/shared/assets/arrow-left.svg';
import BlockHeader from '@/shared/ui/block-header';
import { Container } from '@/shared/ui/container/ui/Container';

import { QUESTIONS_DATA } from '@/widgets/questions-widget/data';

import styles from './QuestionsWidget.module.scss';

export const QuestionsWidget = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <Container className={styles.wrapper}>
      <BlockHeader title="Вопрос-ответ" />
      <ul id="questions">
        {QUESTIONS_DATA.map(({ id, text, title }) => (
          <li
            onClick={() => setIsActive(isActive === id ? null : id)}
            className={isActive === id ? styles.active : ''}
            key={id}
          >
            <header>
              <h3 title={title}>{title}</h3>
              <Image src={arrow} alt={title} title={title} />
            </header>
            {isActive === id && <span title={text}>{text}</span>}
          </li>
        ))}
      </ul>
    </Container>
  );
};
