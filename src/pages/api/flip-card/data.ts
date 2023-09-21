import { type FlipCardData } from '@/shared/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse<FlipCardData[]>): void => {
  // Create an array to store the data objects
  const data: FlipCardData[] = [];

  // Generate 10 data objects
  for (let id = 1; id <= 10; id++) {
    data.push({
      id,
      image: `${id}.jpg`,
      alt: `image ${id}`,
      isFlipped: false,
    });
  }

  res.status(200).json(data);
};

export default handler;
