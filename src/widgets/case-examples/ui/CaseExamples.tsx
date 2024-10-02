import Image from 'next/image';

import BlockHeader from '@/shared/ui/block-header';

import { EXAMPLES_DATA } from '@/widgets/case-examples/data';

import styles from './CaseExamples.module.css';

export const CaseExamples = () => {
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
