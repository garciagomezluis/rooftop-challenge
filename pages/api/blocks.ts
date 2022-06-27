import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { getSortedBlocks, getToken } from "../../services/rooftop";
import { googleProvider } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: any; verified?: boolean }>
) {
  const session = await unstable_getServerSession(req, res, {
    providers: [googleProvider],
    secret: process.env.NEXTAUTH_SECRET
  });

  if (!session || !session.user || !session.user.email) {
    console.log("User not authenticated");
    res.status(401).json({ data: "User not authenticated" });
    return;
  }

  try {
    const token = await getToken(session.user.email);

    if (!token) throw new Error(`Token not found for: ${session.user.email}`);

    const sorted = await getSortedBlocks(token);

    res.status(200).json({ data: sorted });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: (error as Error).message });
  }
}
