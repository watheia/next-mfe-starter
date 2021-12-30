// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session';
import { WaUser } from './types/WaUser';

export const sessionOptions: IronSessionOptions = {
  password: process.env['JWT_SECRET'] as string,
  cookieName: 'watheia.mfe.api.iron-session',
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
