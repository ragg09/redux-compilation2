import { addCards, countGameOver, resetOpenCards } from '@/redux/features/flipCard/flipCardSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetFlipCardsQuery } from '@/redux/services/flipCardAPI';
import FlipCardGameHeader from '@/sections/flip-card/FlipCardGameHeader';
import FlipCardGameOver from '@/sections/flip-card/FlipCardGameOver';
import Card from '@/shared/components/Card';
import FlippingCard from '@/shared/components/Card/FlippingCard';
import Container from '@/shared/components/Container';
import { type FlipCardData, arrayShuffler, arrayDuplicator } from '@/shared/utils';
import { useEffect } from 'react';

const FlipCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetFlipCardsQuery({});
  const {
    cards: cardData,
    openCard,
    totalGame,
    moveCount,
  } = useAppSelector((state) => state.flipCard);

  const duplicatedCards = data ? arrayDuplicator(data, 2) : [];

  const shuffledData: FlipCardData[] = duplicatedCards ? arrayShuffler(duplicatedCards) : [];

  useEffect(() => {
    if (cardData.length === 0) {
      dispatch(addCards(shuffledData));
    }
  }, [shuffledData]);

  useEffect(() => {
    dispatch(resetOpenCards());
  }, [openCard]);

  useEffect(() => {
    if (cardData.every((card) => card.isFlipped) && openCard.length > 0) {
      setTimeout(() => {
        dispatch(countGameOver());
      }, 500);
    }
  }, [cardData, openCard]);

  if (isLoading) {
    return <h1>Loading . . </h1>;
  }

  return (
    <Container className="border">
      <FlipCardGameHeader totalGame={totalGame} moveCount={moveCount} />

      <Card className="grid grid-cols-5 gap-2">
        {cardData.map((card) => (
          <FlippingCard key={card.tempID} card={card} />
        ))}
      </Card>

      <FlipCardGameOver />
    </Container>
  );
};

export default FlipCard;
