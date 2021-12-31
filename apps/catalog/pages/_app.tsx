import { WaApp } from '@watheia/mfe.app';
import '@watheia/theme.styles.global/index.css';

export default class CatalogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[catalog]', this.props);
  }
}
