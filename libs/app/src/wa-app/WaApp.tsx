import { AuthProvider } from '@waweb/auth';
import Layout from '@waweb/layout';
import { ThemeProvider } from '@waweb/theme';
import { fetcher } from '@waweb/utils';
import NextApp from 'next/app';
import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';

/* eslint-disable-next-line */
export interface WaAppProps {}

export class WaApp extends NextApp<WaAppProps> {
  override render() {
    const { Component, pageProps } = this.props;
    return this.compose(<Component {...pageProps} />);
  }

  compose(children: ReactNode | ReactNode[]): JSX.Element {
    return (
      <SWRConfig
        value={{
          fetcher: fetcher,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <AuthProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AuthProvider>
      </SWRConfig>
    );
  }
}

export default WaApp;
