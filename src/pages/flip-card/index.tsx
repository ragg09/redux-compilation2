/* eslint-disable @typescript-eslint/indent */
import { addCards, resetOpenCards } from '@/redux/features/flipCard/flipCardSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useGetFlipCardsQuery } from '@/redux/services/flipCardAPI';
import Card from '@/shared/components/Card';
import FlippingCard from '@/shared/components/Card/FlippingCard';
import Container from '@/shared/components/Container';
import { type FlipCardData, arrayShuffler, arrayDuplicator } from '@/shared/utils';
import { useEffect } from 'react';

const FlipCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetFlipCardsQuery({});
  const { cards: cardData, openCard } = useAppSelector((state) => state.flipCard);

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
        alert('WIN');
      }, 1000); // Change 1000 to the desired delay in milliseconds
    }
  }, [cardData, openCard]);

  if (isLoading) {
    return <h1>Loading . . </h1>;
  }

  return (
    <Container className="border">
      <Card>Flip Card Head | can add Reset Buttons | Move Counts | total Game</Card>

      <Card className="grid grid-cols-5 gap-2">
        {cardData.map((card) => (
          <FlippingCard key={card.tempID} card={card} />
        ))}
      </Card>
    </Container>
  );
};

export default FlipCard;
