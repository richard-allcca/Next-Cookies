// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

// NOTE - usado como demo para enviar las cookies con una peticion desde el front (them-changer)

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  // console.log(req.cookies)

  res.status(200).json({
    name: 'John Doe',
    ...req.cookies
  });
}
