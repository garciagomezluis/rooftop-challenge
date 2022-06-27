import type { NextApiRequest, NextApiResponse } from 'next'
import { getSortedBlocks } from '../../services/rooftop';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: any, verified?: boolean }>
) {
  const token = process.env.ROOFTOP_TOKEN;

  try {
    if(!token) throw new Error("Token not found");

    const sorted = await getSortedBlocks(token);

    res.status(200).json({ data: sorted })
  } catch(error) {
    console.log(error);
    res.status(500).json({ data: (error as Error).message });
  }
}
