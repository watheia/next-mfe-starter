import {
  LinkProps,
  NavLinkProps,
  RouterContextType,
} from '@watheia/base-ui.navigator.router-context';
import React, { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function RouterLink(props: LinkProps) {
  return <Link to={props.href || ''} {...props} />;
}

export function RouterNavLink({ children, ...props }: NavLinkProps) {
  const isActive = useMemo(() => {
    if (props.active === undefined) return undefined;

    return () => Boolean(props.active);
  }, [props.active]);

  return (
    <NavLink to={props.href || ''} active={isActive} {...props}>
      {children}
    </NavLink>
  );
}

export const reactRouterAdapter: RouterContextType = {
  Link: RouterLink,
  NavLink: RouterNavLink,
  useLocation,
};
