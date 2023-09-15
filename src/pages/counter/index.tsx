import { decrement, increment } from '@/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import Container from '@/shared/components/Container';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Redux Toolkit Demonstration</h1>
        <h3>{count}</h3>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
