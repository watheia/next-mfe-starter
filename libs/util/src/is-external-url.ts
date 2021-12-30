import { env } from '@watheia/mfe.api';
import { UrlObject } from 'url';

const isExternalLink = (href: string | UrlObject) =>
  typeof href === 'string' &&
    !href.startsWith(env.url) &&
   (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

export default isExternalLink;
