import { WaApp } from '@watheia/mfe.app';
import '@watheia/mfe.theme.styles/global.css';

export default class CatalogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[catalog]', this.props);
  }
}
