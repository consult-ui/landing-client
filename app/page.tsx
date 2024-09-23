import { Container } from '@/shared/ui/container/ui/Container';

import { BenefitsWidget } from '@/widgets/benefits-widget';
import { FormWidget } from '@/widgets/form-widget';
import { HeaderWidget } from '@/widgets/header-widget';
import { IndividualWidget } from '@/widgets/inidividual-widget';
import { OfferWidget } from '@/widgets/offer-widget';
import { SolutionsWidget } from '@/widgets/solutions-widget';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page} data-testid="home-page">
      <div className={styles.blur}>
        <div className={styles.grid}>
          <Container>
            <HeaderWidget />
            <OfferWidget />
            <SolutionsWidget />
          </Container>
        </div>
      </div>
      <IndividualWidget />
      <BenefitsWidget />
      <FormWidget />
    </main>
  );
}
