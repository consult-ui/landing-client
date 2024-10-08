'use client';

import { useState } from 'react';

import BlockHeader from '@/shared/ui/block-header';
import { scrollTo } from '@/shared/utils/scrollTo';

import { TARRIFS } from '@/widgets/tariffs/data';

import styles from './Tariffs.module.css';

export const Tariffs = () => {
  const [isYear, setIsYear] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <BlockHeader
          style={{ margin: 0 }}
          title="Тарифный план"
          subtitle="- рады сотрудничать с Вами"
        />

        <div className={styles.buttons}>
          <button onClick={() => setIsYear(false)} disabled={!isYear}>
            Месячный план
          </button>
          <button onClick={() => setIsYear(true)} disabled={isYear}>
            Годовой план
          </button>
        </div>
      </header>

      <div className={styles.blocks}>
        {TARRIFS.map(({ id, name, text, priceYear, price }) => (
          <div className={styles.block} key={id}>
            <header>
              <h3>{name}</h3>
              {id === 3 ? (
                <h4>Индивидуально</h4>
              ) : (
                <h4>
                  {isYear ? priceYear : price} ₽ <span>/ месяц</span>
                </h4>
              )}
            </header>

            <div>
              <p>Что включено:</p>

              <ul>
                {text.map((li) => (
                  <li key={li} title={li}>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            <footer>
              <button onClick={() => scrollTo('user-form')}>
                Подключить <span>«{name}»</span>
              </button>
              <button onClick={() => scrollTo('questions')}>
                Остались вопросы?
              </button>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};
