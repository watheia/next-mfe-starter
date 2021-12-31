import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { setGatsbyGlobals } from '@watheia/envs.gatsby.globals';
import { ThemeCompositions } from '@watheia/theme.theme-compositions';
import { GatsbyEnvAspect } from './gatsby-env.aspect';

setGatsbyGlobals();

export class GatsbyEnvPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const gatsbyEnvPreviewMain = new GatsbyEnvPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return gatsbyEnvPreviewMain;
  }
}

GatsbyEnvAspect.addRuntime(GatsbyEnvPreviewMain);
