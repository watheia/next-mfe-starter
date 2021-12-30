import type { WaUser } from '@watheia/mfe.api';
import { sessionOptions } from '@watheia/mfe.api';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(handler, sessionOptions);

function handler(req: NextApiRequest, res: NextApiResponse<WaUser>) {
  req.session.destroy();
  res.json({ isLoggedIn: false, login: '', avatarUrl: '' });
}
