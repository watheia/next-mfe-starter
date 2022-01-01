import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { ReactWithMuiAspect } from './react-with-mui.aspect';

export class ReactWithMuiMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * override dependencies here
       */
      react.overrideDependencies({
        dependencies: {
          '@mui/material': '-',
          '@mui/icons-material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/jest-dom': '-',
          '@testing-library/react': '-',
          '@testing-library/react-hooks': '-',
        },
        devDependencies: {
          '@mui/material': '-',
          '@mui/icons-material': '-',
          react: '-',
          'react-dom': '-',
          '@testing-library/jest-dom': '-',
          '@testing-library/react': '-',
          '@testing-library/react-hooks': '-',
        },
        peerDependencies: {
          '@mui/material': {
            version: '^5.2.5',
            resolveFromEnv: true,
          },
          '@mui/icons-material': {
            version: '^5.2.5',
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
          },
        },
      }),
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
    ]);
    envs.registerEnv(templatesReactEnv);
    return new ReactWithMuiMain();
  }
}

ReactWithMuiAspect.addRuntime(ReactWithMuiMain);
