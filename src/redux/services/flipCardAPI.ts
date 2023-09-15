import { type FlipCardData } from '@/shared/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getFlipCard = createApi({
  reducerPath: 'getFlipCard',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/flip-card',
  }),
  endpoints: (builder) => ({
    getFlipCards: builder.query<FlipCardData[], any>({
      query: () => '/data',
    }),
  }),
});

export const {
  useGetFlipCardsQuery,
} = getFlipCard;
