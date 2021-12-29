import { posix } from 'path';
const getURL = (...parts: string[]) => {
  const basePath =
    process.env['URL'] && process.env['URL'] !== ''
      ? process.env['URL']
      : process.env['VERCEL_URL'] && process.env['VERCEL_URL'] !== ''
      ? process.env['VERCEL_URL']
      : 'http://localhost:4200';

  return new URL(posix.join(...parts) ?? '/', basePath).href;
};

export default getURL;
