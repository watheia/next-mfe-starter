import { IconFont } from '@watheia/theme.fonts.icons-font';
// import 'reset-css';  // do not include, instead make sure each component resets its own styles
import { ThemeContext, ThemeContextProps } from '@watheia/theme.theme-context';
import React from 'react';

const ICON_MOON_VERSION = 'mxd7i0';

export type ThemeCompositionsProps = Record<string, any> & ThemeContextProps;

export const ThemeCompositions = ({ children, ...rest }: ThemeCompositionsProps) => {
  return (
    <ThemeContext {...rest}>
      <IconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeContext>
  );
};
