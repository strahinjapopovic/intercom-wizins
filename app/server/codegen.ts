import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schemas/schema.graphql",
  generates: {
    "./src/__generated__/resolvers-types.ts": { 
      plugins: [
        'typescript',
        'typescript-resolvers'
      ],
      config: {
        useTypeImports: true, 
        maybeValue: 'T | undefined',
        inputMaybeValue: 'T | undefined',
        useIndexSignature: true,
      },
    }
  }
};

export default config;