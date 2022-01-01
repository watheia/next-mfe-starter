import { WaApp } from '@watheia/mfe.app';
import '@watheia/theme.styles.global/index.css';

export default class BlogApp extends WaApp {
  override componentDidMount(): void {
    console.log('[blog]', this.props);
  }
}
