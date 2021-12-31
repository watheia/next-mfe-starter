import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { tailwindConfigPath } from '@watheia/envs.tailwind.tailwind-config';
import { UseTailwindTransformer } from '@watheia/envs.tailwind.webpack-transformer';
import { EnvWithTailwindAspect } from './env-with-tailwind.aspect';

export class EnvWithTailwindMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const {
      previewConfigTransformer: twPreviewTransformer,
      devServerConfigTransformer: twDevServerTransformer,
    } = UseTailwindTransformer(tailwindConfigPath); // <-- this is for shareable tailwind config
    // } = UseTailwindTransformer(require.resolve('./tailwind/tailwind.config.js')); // <-- this is for locally-defined tw config

    const templatesReactEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.overrideTsConfig(tsconfig),
      react.useWebpack({
        previewConfig: [twPreviewTransformer],
        devServerConfig: [twDevServerTransformer],
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
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          // '@types/react': '17.0.3'
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new EnvWithTailwindMain();
  }
}

EnvWithTailwindAspect.addRuntime(EnvWithTailwindMain);