import { MainOfferBlock } from '@/entities/main-offer-block/ui/MainOfferBlock';
import { OfferDescription } from '@/entities/offer-description';

export const OfferWidget: React.FC = () => {
  return (
    <div>
      <MainOfferBlock />
      <OfferDescription />
      <div>
        <button>Заполнить форму</button>
        <button>Связаться с нами</button>
      </div>
    </div>
  );
};
