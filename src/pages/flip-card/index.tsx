import { useGetFlipCardsQuery } from '@/redux/services/flipCardAPI';
import Card from '@/shared/components/Card';
import FlippingCard from '@/shared/components/Card/FlippingCard';
import Container from '@/shared/components/Container';

const FlipCard: React.FC = () => {
  const { data, isLoading, error } = useGetFlipCardsQuery({});

  console.log(data, isLoading, error);

  return (
    <Container className="border">
      <Card>Flip Card Head | can add Reset Buttons | Move Counts | total Game</Card>

      <Card className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }, (_, index) => (
          <FlippingCard key={index}>Testing</FlippingCard>
        ))}
      </Card>
    </Container>
  );
};

export default FlipCard;
