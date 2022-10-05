module.exports = {
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/jest',
    '@mels/prettier',
  ],

  rules: {
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },

      parserOptions: {
        project: './tsconfig.eslint.json',
      },

      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.eslint.json',
          },
        },
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
};
