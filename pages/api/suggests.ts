import type { NextApiRequest, NextApiResponse } from "next";
import { getSuggestsAll } from "../../libs/getSuggestsAll";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.body.query.trim();
  const suggests = await getSuggestsAll(query);
  res.status(200).json({ suggests });
};

export default handler;
