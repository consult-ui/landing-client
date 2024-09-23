import Image from 'next/image';

import grid from '@/shared/assets/bg-grid.svg';
import blur from '@/shared/assets/blur.svg';
import chat from '@/shared/assets/chat.svg';

import { BenefitsWidget } from '@/widgets/benefits-widget';
import { FormWidget } from '@/widgets/form-widget';
import { HeaderWidget } from '@/widgets/header-widget';
import { IndividualWidget } from '@/widgets/inidividual-widget';
import { OfferWidget } from '@/widgets/offer-widget';
import { SolutionsWidget } from '@/widgets/solutions-widget';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <HeaderWidget />
        <main className={styles.main} data-testid="home-page">
          <OfferWidget />
          <SolutionsWidget />
          <IndividualWidget />
          <BenefitsWidget />
          <FormWidget />
        </main>
      </div>
      <Image src={blur} alt={'blur'} className={styles.blur} />
      <Image src={grid} alt={'grid'} className={styles.grid} />
      <Image className={styles.chat} src={chat} alt={'chat'} />
    </>
  );
}
