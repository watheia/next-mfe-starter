import { WaApp } from '@watheia/mfe.app';
import '@watheia/mfe.theme.styles/global.css';

export default class BlogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[blog]', this.props);
  }
}
