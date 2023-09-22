import { resetFlipCardGame } from '@/redux/features/flipCard/flipCardSlice';
import { useAppDispatch } from '@/redux/hook';
import Button from '@/shared/components/Button';
import Card from '@/shared/components/Card';
import Headings from '@/shared/components/Headings';
import { Fragment } from 'react';

export interface GameHeaderProps {
  totalGame: number;
  moveCount: number;
}

const FlipCardGameHeader: React.FC<GameHeaderProps> = ({
  totalGame,
  moveCount,
}: GameHeaderProps) => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <Card className="flex justify-center">
        <Headings option={'h1'} text={'FLIP CARD GAME'} />
      </Card>

      <div className="flex justify-around items-center m-4 mt-10">
        <Headings option={'h6'} text={`WINS: ${totalGame}`} />
        <Button
          text={'Reset Game'}
          onClick={() => {
            dispatch(resetFlipCardGame());
          }}
        />
        <Headings option={'h6'} text={`MOVES: ${moveCount}`} />
      </div>
    </Fragment>
  );
};

export default FlipCardGameHeader;
