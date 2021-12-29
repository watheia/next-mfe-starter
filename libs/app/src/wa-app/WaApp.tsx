import React, { ReactNode } from 'react';
import Layout from '@waweb/layout';
import { ThemeProvider } from '@waweb/theme';
import NextApp from 'next/app';
import { AuthProvider } from '@waweb/auth';

/* eslint-disable-next-line */
export interface WaAppProps {}

export class WaApp extends NextApp<WaAppProps> {
  override render() {
    const { Component, pageProps } = this.props;
    return this.compose(<Component {...pageProps} />);
  }

  compose(children: ReactNode | ReactNode[]): JSX.Element {
    return (
      <AuthProvider>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}

export default WaApp;
