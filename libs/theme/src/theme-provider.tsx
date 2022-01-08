import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import React, { ReactNode, useMemo } from 'react';
import { createTheme } from './theme';
import { useDarkMode } from '@watheia/ui-hooks';

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  children: ReactNode | ReactNode[];
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useDarkMode();
  const theme = useMemo(
    () => createTheme(prefersDarkMode ? 'dark' : 'light'),
    [prefersDarkMode]
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </>
  );
}

export default ThemeProvider;
