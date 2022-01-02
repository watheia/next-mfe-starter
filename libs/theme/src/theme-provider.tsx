import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createEmotionCache } from '@watheia/mfe.util';
import Head from 'next/head';
import React, { ReactNode, useMemo } from 'react';
import { createTheme } from './theme';
import { useDarkMode } from '@watheia/envs.material.use-dark-mode';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  emotionCache?: EmotionCache;
  children: ReactNode | ReactNode[];
}

export function ThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeProviderProps) {
  const prefersDarkMode = useDarkMode();
  const theme = useMemo(
    () => createTheme(prefersDarkMode ? 'dark' : 'light'),
    [prefersDarkMode]
  );
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}

export default ThemeProvider;
