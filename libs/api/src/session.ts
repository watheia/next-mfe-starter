// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session';
import env from './env';
import { WaUser } from './types/WaUser';

export const sessionOptions: IronSessionOptions = {
  password: env.jwt_secret,
  cookieName: env.cookie_name,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env['NODE_ENV'] === 'production',
  },
};

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: WaUser;
  }
}
