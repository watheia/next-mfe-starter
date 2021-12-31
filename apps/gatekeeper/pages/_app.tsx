import { WaApp } from '@watheia/mfe.app';
import '@watheia/theme.styles.global/index.css';

export default class GatekeeperApp extends WaApp {
  override componentDidMount(): void {
    console.log('[gatekeeper]', this.props);
  }
}
