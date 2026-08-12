import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
    overwrite: true, 
    schema: '../server/schemas/schema.graphql',
    documents: [
        'src/components/**/*.{ts,tsx}',
        'src/pages/**/*.{ts,tsx}',
        'src/utils/**/*.{ts,tsx}'
    ],
    generates: {
        'gql/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                useTypeImports: true,
            },
            config: {
                useTypeImports: true,
                skipTypename: false,
            }
        }
    }
};

export default config as CodegenConfig;