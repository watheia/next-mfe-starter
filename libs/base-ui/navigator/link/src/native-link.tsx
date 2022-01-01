import { compareUrl } from '@watheia/base-ui.navigator.compare-url';
import type { LinkProps, NavLinkProps } from '@watheia/base-ui.navigator.router-context';
import { useLocation } from '@watheia/base-ui.navigator.use-location';
import classNames from 'clsx';
import React, { forwardRef, useMemo } from 'react';

const externalLinkAttributes = { rel: 'noopener', target: '_blank' };
export const isBrowser = typeof window !== 'undefined';

export const NativeLink = forwardRef<HTMLAnchorElement, LinkProps>(function NativeLink(
  { external, native, state, ...rest }: LinkProps,
  ref
) {
  const externalProps = external ? externalLinkAttributes : {};

  return <a {...rest} {...externalProps} ref={ref} />;
});

export const NativeNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NativeNavLink(
    {
      className,
      style,
      activeClassName,
      activeStyle,
      active,
      strict,
      exact,
      href,
      ...rest
    }: NavLinkProps,
    ref
  ) {
    const location = useLocation();

    const isActive = useMemo(() => {
      if (typeof active === 'boolean') return active;
      if (!location || !href) return false;

      return compareUrl(location.pathname, href, { exact, strict });
    }, [active, href, location]);

    const combinedStyles = useMemo(
      () => (isActive && activeStyle ? { ...style, ...activeStyle } : style),
      [isActive, style]
    );

    return (
      <NativeLink
        {...rest}
        ref={ref}
        href={href}
        className={classNames(className, isActive && activeClassName)}
        style={combinedStyles}
      />
    );
  }
);
