import { Header } from '@/entities/header';
import { OfferWidget } from '@/widgets/offer-widget';

import styles from './page.module.css';
import { SolutionsWidget } from '@/widgets/solutions-widget';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main} data-testid="home-page">
        <OfferWidget />
        <SolutionsWidget />
      </main>
    </>
  );
}
