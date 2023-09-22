import { nextRound } from '@/redux/features/flipCard/flipCardSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import Button from '@/shared/components/Button';
import Headings from '@/shared/components/Headings';
import Modal from '@/shared/components/Modal';

const FlipCardGameOver: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isGameOver, totalGame, moveCount } = useAppSelector((state) => state.flipCard);
  return (
    <Modal isOpen={isGameOver} closable={false}>
      <div className=" w-[300px] ">
        <div className="w-full  flex justify-center">
          <Headings option={'h4'} text={'GAME OVER'} />
        </div>
        <div className="w-full  flex justify-center">
          <p className="text-xl">Game {totalGame} Total Moves:</p>
        </div>
        <div className="w-full  flex justify-center">
          <Headings option={'h6'} text={moveCount.toString()} />
        </div>

        <div className="w-full  flex justify-center">
          <Button
            text={'Next Round'}
            onClick={() => {
              dispatch(nextRound());
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FlipCardGameOver;
