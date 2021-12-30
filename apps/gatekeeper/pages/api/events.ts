import type { Endpoints } from '@octokit/types';
import { sessionOptions } from '@watheia/mfe.api';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from 'octokit';

export type Events = Endpoints['GET /users/{username}/events']['response']['data'];

const octokit = new Octokit();

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse<Events>) {
  const user = req.session?.user;

  if (!user || !user.isLoggedIn) {
    res.status(401).end();
    return;
  }

  try {
    const { data: events } = await octokit.rest.activity.listPublicEventsForUser({
      username: user.login,
    });

    res.json(events);
  } catch (error) {
    res.status(200).json([]);
  }
}
