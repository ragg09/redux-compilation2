import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counter/counterSlice';
import flipCardReducer from '@/redux/features/flipCard/flipCardSlice';
import { getFlipCard } from '@/redux/services/flipCardAPI';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flipCard: flipCardReducer,
    [getFlipCard.reducerPath]: getFlipCard.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(getFlipCard.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
