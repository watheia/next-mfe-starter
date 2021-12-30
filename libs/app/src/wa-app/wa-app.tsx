import { GlobalStyles } from '@mui/material';
import { AuthProvider, env, fetcher, SupabaseProvider } from '@watheia/mfe.api';
import { ThemeProvider } from '@watheia/mfe.theme';
import NextApp from 'next/app';
import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { AppBar } from '../app-bar';
import Footer from '../footer';

/* eslint-disable-next-line */
export interface WaAppProps {}

export class WaApp extends NextApp<WaAppProps> {
  override render() {
    const { Component, pageProps } = this.props;
    return this.compose(<Component {...pageProps} />);
  }

  compose(children: ReactNode | ReactNode[]): JSX.Element {
    return (
      <>
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
      </>
    );
  }
}

export default WaApp;
