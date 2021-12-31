import { WaApp } from '@watheia/mfe.app';
import '@watheia/theme.styles.global/index.css';

export default class HomeApp extends WaApp {
  override componentDidMount(): void {
    console.log('[home]', this.props);
  }
}
