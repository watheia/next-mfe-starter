import { NavLinkProps, useRouter } from '@watheia/base-ui.navigator.router-context';
import React, { forwardRef } from 'react';
import { NativeNavLink } from './native-link';

export type { NavLinkProps };

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  props: NavLinkProps,
  ref
) {
  const router = useRouter();
  const ActualNavLink = router.NavLink || NativeNavLink;

  if (props.native || props.external) {
    return <NativeNavLink {...props} ref={ref} />;
  }

  return <ActualNavLink {...props} ref={ref} />;
});
