import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import nextPlugin from '@next/eslint-plugin-next'
import typescriptParser from '@typescript-eslint/parser'
import typescript from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: nextPlugin.configs['recommended'],
})

const eslintConfig = [
  ...compat.extends(
    'eslint:recommended',
    'plugin:import/recommended',
    'next/core-web-vitals',
    'next/typescript'
  ),
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    ignores: ['node_modules/', '.next/', '.netlify/', 'public/'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      tailwindcss,
    },
    rules: {
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'jsx-quotes': ['error', 'prefer-double'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['tailwind.config.{js,ts}', 'postcss.config.{js,ts}'],
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]

export default eslintConfig
