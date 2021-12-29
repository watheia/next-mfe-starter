import React from 'react';
import { WaApp } from '@waweb/app';

import './styles.css';

export default class CatalogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[catalog]', this.props);
  }
}
