import { GlobalStyles } from '@mui/material';
import { AuthProvider, env, fetcher, SupabaseProvider } from '@watheia/mfe.api';
import { ThemeProvider } from '@watheia/mfe.theme';
import NextApp from 'next/app';
import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { AppBar } from '../app-bar';
import Footer from '../footer';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../create-emotion-cache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const swrOptions = {
  fetcher,
  onError: (err: any) => {
    console.error(err);
  },
};

/* eslint-disable-next-line */
export interface WaAppProps {
  swr: typeof swrOptions;
  emotionCache: EmotionCache;
}

export class WaApp extends NextApp<WaAppProps> {
  static defaultProps = {
    swr: swrOptions,
    emotionCache: clientSideEmotionCache,
  };

  override render() {
    const { Component, pageProps } = this.props;
    return this.compose(<Component {...pageProps} />);
  }

  compose(children: ReactNode | ReactNode[]): JSX.Element {
    return (
      <SWRConfig value={this.props.swr}>
        <CacheProvider value={this.props.emotionCache}>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
          <SupabaseProvider publicUrl={env.supabase_url} anonKey={env.public_key}>
            <AuthProvider>
              <ThemeProvider>
                <AppBar />
                {children}
                <Footer />
              </ThemeProvider>
            </AuthProvider>
          </SupabaseProvider>
        </CacheProvider>
      </SWRConfig>
    );
  }
}

export default WaApp;
