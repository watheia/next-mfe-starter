import React, { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from '@mui/material';
import { useDarkMode } from '@watheia/envs.material.use-dark-mode';
import { withTheme } from '@watheia/envs.material.theme';

export type ThemeProviderProps = {
  /**
   * a custom MUI theme object. If none is supplied, will use default theme objet
   */
  theme?: Theme;

  children: any;
};

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const prefersDarkMode = useDarkMode();
  theme = useMemo(
    () => theme ?? withTheme(prefersDarkMode ? 'dark' : 'light'),
    [prefersDarkMode, theme]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
