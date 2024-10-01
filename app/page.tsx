import { Container } from '@/shared/ui/container/ui/Container';

import { BenefitsWidget } from '@/widgets/benefits-widget';
import { CaseExamples } from '@/widgets/case-examples';
import { Footer } from '@/widgets/footer';
import { FormWidget } from '@/widgets/form-widget';
import { HeaderWidget } from '@/widgets/header-widget';
import { IndividualWidget } from '@/widgets/inidividual-widget';
import { OfferWidget } from '@/widgets/offer-widget';
import { QuestionsWidget } from '@/widgets/questions-widget';
import { SolutionsWidget } from '@/widgets/solutions-widget';
import { Tariffs } from '@/widgets/tariffs';

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
            <CaseExamples />
            <Tariffs />
          </Container>
        </div>
      </div>
      <IndividualWidget />
      <BenefitsWidget />
      <FormWidget />
      <QuestionsWidget />
      <Footer />
    </main>
  );
}
