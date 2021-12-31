import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import {
  gatsbyDevServerConfigTransformer,
  gatsbyPreviewConfigTransformer,
} from '@watheia/envs.gatsby.webpack-transformer';
import { GatsbyEnvAspect } from './gatsby-env.aspect';

/**
 * Uncomment to include config files for overrides of Typescript or Webpack
 */
// const tsconfig = require('./typescript/tsconfig');

export class GatsbyEnvMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      react.useWebpack({
        previewConfig: [gatsbyPreviewConfigTransformer],
        devServerConfig: [gatsbyDevServerConfigTransformer],
      }),
      // react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          (config) => {
            config.setRule('no-console', ['error']);
            return config;
          },
        ],
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      react.usePrettier({
        transformers: [
          (config) => {
            config.setKey('tabWidth', 2);
            return config;
          },
        ],
      }),

      /**
       * override dependencies here
       */
      react.overrideDependencies({
        dependencies: {
          '@emotion/cache': '-',
          '@emotion/react': '-',
          gatsby: '-',
          'gatsby-plugin-typescript': '-',
          'gatsby-source-filesystem': '-',
          'gatsby-transformer-sharp': '-',
          'gatsby-plugin-sharp': '-',
          'gatsby-plugin-image': '-',
          'gatsby-plugin-manifest': '-',
          'gatsby-plugin-offline': '-',
          'gatsby-plugin-react-helmet': '-',
          'gatsby-plugin-svgr': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/jest-dom': '-',
          '@testing-library/react': '-',
          '@testing-library/react-hooks': '-'
        },
        devDependencies: {
          '@emotion/cache': '-',
          '@emotion/react': '-',
          gatsby: '-',
          'gatsby-plugin-typescript': '-',
          'gatsby-source-filesystem': '-',
          'gatsby-transformer-sharp': '-',
          'gatsby-plugin-sharp': '-',
          'gatsby-plugin-image': '-',
          'gatsby-plugin-manifest': '-',
          'gatsby-plugin-offline': '-',
          'gatsby-plugin-react-helmet': '-',
          'gatsby-plugin-svgr': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/jest-dom': '-',
          '@testing-library/react': '-',
          '@testing-library/react-hooks': '-'
        },
        peerDependencies: {
          '@emotion/cache': {
            version: '^11.7.1',
            resolveFromEnv: true,
          },
          '@emotion/react': {
            version: '^11.7.1',
            resolveFromEnv: true,
          },
          gatsby: {
            version: '^4.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-typescript': {
            version: '^4.2.0',
            resolveFromEnv: true,
          },
          'gatsby-source-filesystem': {
            version: '^4.2.0',
            resolveFromEnv: true,
          },
          'gatsby-transformer-sharp': {
            version: '^4.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-sharp': {
            version: '^4.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-image': {
            version: '^2.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-manifest': {
            version: '^5.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-offline': {
            version: '^5.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-react-helmet': {
            version: '^5.2.0',
            resolveFromEnv: true,
          },
          'gatsby-plugin-svgr': {
            version: '^3.0.0-beta.0',
            resolveFromEnv: true,
          },
          '@testing-library/react': {
            version: '^12.1.2',
            resolveFromEnv: true,
          },
          '@testing-library/react-hooks': {
            version: '^7.0.2',
            resolveFromEnv: true,
          },
          '@testing-library/jest-dom': {
            version: '^5.16.1',
            resolveFromEnv: true,
          },
          react: {
            version: '^17.0.2',
            resolveFromEnv: true,
          },
          'react-dom': {
            version: '^17.0.2',
            resolveFromEnv: true,
          }
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new GatsbyEnvMain();
  }
}

GatsbyEnvAspect.addRuntime(GatsbyEnvMain);
