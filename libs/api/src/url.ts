import { posix } from 'path';
import { UrlObject } from 'url';
import env from './env';

export const isExternal = (href: string | UrlObject) =>
  typeof href === 'string' &&
  !href.startsWith(env.url) &&
  (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

/**
 * @param parts
 * @returns
 */
export const url = (...parts: string[]) => {
  // console.log('url(...parts: string[])', parts);
  const basePath =
    process.env['URL'] && process.env['URL'] !== ''
      ? process.env['URL']
      : process.env['VERCEL_URL'] && process.env['VERCEL_URL'] !== ''
      ? process.env['VERCEL_URL']
      : 'http://localhost:4200';

  return new URL(posix.join(...parts) ?? '/', basePath);
};

export default url;
