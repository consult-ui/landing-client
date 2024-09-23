import { BenefitsWidget } from '@/widgets/benefits-widget';
import { FormWidget } from '@/widgets/form-widget';
import { IndividualWidget } from '@/widgets/inidividual-widget';
import { OfferWidget } from '@/widgets/offer-widget';
import { SolutionsWidget } from '@/widgets/solutions-widget';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      {/*<Image priority={false} src={grid} alt={'grid'} className={styles.grid} />*/}
      <div className={styles.page} data-testid="home-page">
        <OfferWidget />
        <SolutionsWidget />
        <IndividualWidget />
        <BenefitsWidget />
        <FormWidget />
      </div>
    </>
  );
}
