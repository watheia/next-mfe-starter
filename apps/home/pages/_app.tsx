import React from 'react';
import { WaApp } from '@waweb/app';

import './styles.css';

export default class HomeApp extends WaApp {
  override componentDidMount(): void {
    console.log('[home]', this.props);
  }
}
