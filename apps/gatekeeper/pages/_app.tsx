import React, { ReactNode } from 'react';
import Layout from '@waweb/layout';
import { ThemeProvider } from '@waweb/theme';
import { WaApp } from '@waweb/app';
import { AuthProvider } from '@waweb/auth';

import './styles.css';

export default class GatekeeperApp extends WaApp {
  override componentDidMount(): void {
    console.log('[gatekeeper]', this.props);
  }
}
