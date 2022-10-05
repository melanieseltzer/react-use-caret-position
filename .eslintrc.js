module.exports = {
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    '@mels/prettier',
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },

      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
    {
      files: ['docs/**/*'],
      rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['rollup.config.js'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
