import { type FlipCardData } from '@/shared/utils';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface flipCardState {
  cards: FlipCardData[];
  moveCount: number;
  openCard: number[];
}

const initialState: flipCardState = {
  cards: [],
  moveCount: 0,
  openCard: []
};

export const flipCardSlice = createSlice({
  name: 'flipCard',
  initialState,
  reducers: {
    reset: () => initialState,
    addCards: (state, action: PayloadAction<FlipCardData[]>) => {
      state.cards.push(...action.payload);
    },
    flipCard: (state, action: PayloadAction<number>) => {
      const card = state.cards.find((c) => c.tempID === action.payload);
      if (card) {
        state.openCard.push(action.payload);
        card.isFlipped = !card.isFlipped;
      }
    },
    resetOpenCards: (state) => {
      const [firstId, secondId, thirdId] = state.openCard;
      const firstCard = state.cards.find((card) => card.tempID === firstId);
      const secondCard = state.cards.find((card) => card.tempID === secondId);
      const thirdCard = state.cards.find((card) => card.tempID === thirdId);

      if (state.openCard.length === 2) {
        if (firstCard && secondCard && firstCard.tempID === secondCard.tempID) {
          if (!firstCard.isFlipped || !secondCard.isFlipped) {
            console.log('RESET');

            state.cards.forEach((card) => {
              if (card.tempID === firstId || card.tempID === secondId) {
                card.isFlipped = false;
              }
            });

            state.openCard = [];
          }
        }
      }

      if (state.openCard.length > 2) {
        if (firstCard?.id === secondCard?.id) {
          state.cards.forEach((card) => {
            if (card.tempID === firstId || card.tempID === secondId) {
              card.isFlipped = true;
            }
          });

          state.openCard = [thirdId];
        } else if (secondCard?.id === thirdCard?.id) {
          state.cards.forEach((card) => {
            if (card.tempID === thirdId || card.tempID === secondId) {
              card.isFlipped = true;
            }

            if (card.tempID === firstId) {
              card.isFlipped = false;
            }
          });

          state.openCard = [];
        } else if (firstCard?.id === secondCard?.id && secondCard?.id === thirdCard?.id) {
          state.openCard = [];
        } else {
          state.cards.forEach((card) => {
            if (card.tempID === firstId || card.tempID === secondId) {
              card.isFlipped = false;
            }
          });

          state.openCard = [thirdId];
        }
      }
    },
    incrementMoveCount: (state) => {
      state.moveCount += 1;
    },
  },
});

export const { reset, addCards, flipCard, resetOpenCards, incrementMoveCount } = flipCardSlice.actions;

export default flipCardSlice.reducer;
