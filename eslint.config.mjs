import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      indent: ['error', 2],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
    },
  },
]);
