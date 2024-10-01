'use client';

import Image from 'next/image';

import BlockHeader from '@/shared/ui/block-header';
import { Button } from '@/shared/ui/button';

import { EXAMPLES_DATA } from '@/widgets/case-examples/data';

import styles from './CaseExamples.module.css';

export const CaseExamples = () => {
  function scrollToForm() {
    const form = document.getElementById('user-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <div className={styles.wrapper}>
      <BlockHeader
        title="Примеры использования"
        subtitle="– популярные задачи"
      />

      <div className={styles.content}>
        {EXAMPLES_DATA.map((elem) => (
          <div
            key={elem.id}
            className={styles.block}
            title={`Consult Ai - ${elem.title}`}
          >
            <Image src={elem.img} alt={elem.title} />
            <div className={styles.blockText}>
              <h5 title={elem.title}>{elem.title}</h5>
              <p title={elem.text}>{elem.text}</p>
              {elem.id === 6 && (
                <Button
                  size="sm"
                  onClick={scrollToForm}
                  title="Заполните форму, наши менеджеры свяжуться с вами в течение двух часов"
                >
                  Попробовать сейчас
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
