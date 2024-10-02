import { Container } from '@/shared/ui/container/ui/Container';

import { BenefitsWidget } from '@/widgets/benefits-widget';
import { CaseExamples } from '@/widgets/case-examples';
import { Footer } from '@/widgets/footer';
import { FormWidget } from '@/widgets/form-widget';
import { HeaderWidget } from '@/widgets/header-widget';
import { OfferWidget } from '@/widgets/offer-widget';
import { QuestionsWidget } from '@/widgets/questions-widget';
import { SavingResources } from '@/widgets/saving-resources ';
import { SolutionsWidget } from '@/widgets/solutions-widget';
import { Tariffs } from '@/widgets/tariffs';
import { Video } from '@/widgets/video';

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
            <Video />
          </Container>
        </div>
      </div>
      <SavingResources />
      <Container>
        <CaseExamples />
        <Tariffs />
      </Container>
      <BenefitsWidget />
      <FormWidget />
      <QuestionsWidget />
      <Footer />
    </main>
  );
}
