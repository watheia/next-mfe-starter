import { IconFont } from '@watheia/theme.fonts.icons-font';
import { Roboto } from '@watheia/theme.fonts.roboto';
import { Theme } from '@watheia/theme.theme-provider';
import classNames from 'clsx';
import React, { HTMLAttributes } from 'react';
import colors from './colors.module.scss';
import global from './global.module.scss'; // TODO - rename
import sizes from './sizes.module.scss';

export type ThemeContextProps = Record<string, any> & HTMLAttributes<HTMLDivElement>;

/**
 * Fully fledged theme for compositions
 */
export function ThemeContext({ children, className, ...rest }: ThemeContextProps) {
  return (
    <Theme
      {...rest}
      className={classNames(
        className,
        sizes['heading'],
        global['overrides'],
        colors['status']
      )}
    >
      <IconFont query="eo46cx" />
      <Roboto />
      {children}
    </Theme>
  );
}
