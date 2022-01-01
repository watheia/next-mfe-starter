import { CacheProvider, EmotionCache } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@watheia/envs.material.theme-provider';
import { AuthProvider, env, fetcher, SupabaseProvider } from '@watheia/mfe.api';
import NextApp from 'next/app';
import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { AppBar } from '../app-bar';
import Footer from '../footer';
import createEmotionCache from './emotion-cache';

/* eslint-disable-next-line */
export interface WaAppProps {
  emotionCache?: EmotionCache;
  children: ReactNode | ReactNode[];
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export class WaApp extends NextApp<WaAppProps> {
  override render() {
    const { Component, pageProps } = this.props;
    return this.compose(<Component {...pageProps} />);
  }

  compose(children: ReactNode | ReactNode[]): JSX.Element {
    return (
      <CacheProvider value={this.props.emotionCache ?? clientSideEmotionCache}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <SWRConfig
          value={{
            fetcher,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          <SupabaseProvider publicUrl={env.supabase_url} anonKey={env.public_key}>
            <AuthProvider>
              <ThemeProvider>
                <AppBar />
                {children}
                <Footer />
              </ThemeProvider>
            </AuthProvider>
          </SupabaseProvider>
        </SWRConfig>
      </CacheProvider>
    );
  }
}

export default WaApp;
