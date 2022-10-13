module.exports = {
  extends: [
    '@mels/base',
    '@mels/typescript',
    '@mels/react',
    '@mels/react/jsx-runtime',
    '@mels/jest',
    '@mels/prettier',
  ],

  // unignore dotfile js files (eslint ignores dotfiles by default)
  ignorePatterns: ['!.*.cjs'],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parserOptions: {
        project: './tsconfig.json',
      },

      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
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
  ],
};
