import { WaApp } from '@watheia/mfe.app';
import '@watheia/mfe.theme.styles/global.css';

export default class HomeApp extends WaApp {
  override componentDidMount(): void {
    console.log('[home]', this.props);
  }
}
