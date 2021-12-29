import GlobalStyles from '@mui/material/GlobalStyles';
import * as React from 'react';
import { ReactNode } from 'react';
import { AppBar } from './app-bar';
import Footer from './footer';

export interface LayoutProps {
  children: ReactNode | ReactNode[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <AppBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
