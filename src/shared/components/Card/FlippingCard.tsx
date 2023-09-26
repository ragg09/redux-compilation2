import { countFlipMove, flipCard } from '@/redux/features/flipCard/flipCardSlice';
import { useAppDispatch } from '@/redux/hook';
import { type FlipCardData } from '@/shared/utils';
import Image from 'next/image';

export interface FlipCardProps {
  className?: string;
  card: FlipCardData;
}

const FlippingCard: React.FC<FlipCardProps> = ({ className, card }: FlipCardProps) => {
  const dispatch = useAppDispatch();

  const handleCardClick = (cardIndex: number | undefined): void => {
    if (!card.isFlipped) {
      if (cardIndex) {
        dispatch(flipCard(cardIndex));
        dispatch(countFlipMove());
      }
    }
  };

  return (
    <div
      className="group max-w-[250px] max-h-[180px] h-80 w-49 [perspective:1000px] overflow-hidden rounded-xl "
      onClick={() => {
        handleCardClick(card.tempID);
      }}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          card.isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src={'/flip-card/backcard.jpg'}
            alt={'bg'}
            width={250}
            height={180}
            priority={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute h-full w-full rounded-xl bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            src={`/flip-card/${card.image}`}
            alt={`${card.alt} | ${card.tempID}`}
            width={250}
            height={180}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
