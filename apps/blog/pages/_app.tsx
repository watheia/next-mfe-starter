import React from 'react';
import { WaApp } from '@waweb/app';

export default class BlogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[blog]', this.props);
  }
}
