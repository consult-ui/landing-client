import { Header } from '@/entities/header';
import { OfferWidget } from '@/widgets/offer-widget';
import { SolutionsWidget } from '@/widgets/solutions-widget';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main} data-testid="home-page">
        <OfferWidget />
        <SolutionsWidget />
      </main>
    </div>
  );
}
