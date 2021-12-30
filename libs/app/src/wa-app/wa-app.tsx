import { GlobalStyles } from '@mui/material';
import { SupabaseProvider } from '@waweb/api';
import { AuthProvider } from '@waweb/auth';
import { ThemeProvider } from '@waweb/theme';
import { fetcher } from '@waweb/utils';
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
            fetcher: fetcher,
            onError: (err) => {
              console.error(err);
            },
          }}
        >
          <SupabaseProvider
            publicUrl={process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? ''}
            anonKey={process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? ''}
          >
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
