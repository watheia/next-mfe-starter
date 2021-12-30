import { WaApp } from '@watheia/mfe.app';
import '@watheia/mfe.theme.styles/global.css';

export default class GatekeeperApp extends WaApp {
  override componentDidMount(): void {
    console.log('[gatekeeper]', this.props);
  }
}
