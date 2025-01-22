import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/jsx-uses-vars': 'error',
      'quotes': ['error', 'single'],
      'curly': ['error', 'all'],
      'react/no-direct-mutation-state': 2,
      'semi': ['error', 'always'],
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect' // Specify the React version here
      }
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];