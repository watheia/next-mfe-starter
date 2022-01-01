import { Location } from '@watheia/base-ui.navigator.router-context';

/** default implementation for useHref */
export function useHref(location: string | Partial<Location>) {
  if (typeof location === 'string') return location;

  const { pathname = '', search = '', hash = '' } = location;

  const prefixSearch = search !== '' && !search.startsWith('?') ? '?' : '';
  const prefixHash = hash !== '' && !hash.startsWith('#') ? '#' : '';

  return [pathname, prefixSearch, search, prefixHash, hash].join('');
}
