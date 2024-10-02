import Image from 'next/image';

import BlockHeader from '@/shared/ui/block-header';
import { Container } from '@/shared/ui/container/ui/Container';

import { SAVING_RES } from '@/widgets/saving-resources /data';

import styles from './SavingResources.module.scss';

export const SavingResources = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <BlockHeader
          style={{ margin: '0 0 .35em' }}
          title="Мы экономим ваши ресурсы"
        />
        <p className={styles.description}>
          В этом блоке представлены средние показатели экономии ресурсов за год
          на примере компаний со штатом от 5 до 18 человек.
        </p>

        <div className={styles.blocks}>
          {SAVING_RES.map(
            ({ id, image, value, valueTitle, valueText, text }) => (
              <div key={id} className={styles.block}>
                <header>
                  <Image src={image} alt={text} />
                  <div>
                    <small>{valueTitle}</small>
                    <h4>
                      {value} <span>{valueText}</span>
                    </h4>
                  </div>
                </header>
                <p>{text}</p>
              </div>
            ),
          )}
        </div>
      </Container>
    </div>
  );
};
