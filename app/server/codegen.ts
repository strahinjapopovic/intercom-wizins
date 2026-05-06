
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schemas/schema.graphql",
  generates: {
    // Point to a FILE, not a folder, for backend types
    "./src/__generated__/resolvers-types.ts": { 
      plugins: [
        'typescript',
        'typescript-resolvers'
      ],
      config: {
        maybeValue: 'T | undefined',
        inputMaybeValue: 'T | undefined',
        useIndexSignature: true,
      },
    }
  }
};

export default config;
