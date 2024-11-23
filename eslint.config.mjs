import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import { fixupConfigRules } from "@eslint/compat"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
  root: true,
  extends: [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "tailwindcss"],
  rules: {
    "no-console": ["error", { "allow": ["info", "warn", "error"] }],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off"
  },
  overrides: [
    {
      "files": ["*.ts", "*.tsx", "*.js"],
      "parser": "@typescript-eslint/parser"
    }
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  ignorePatterns: ["node_modules/", ".next/", "out/", "public/"],
})

const patchedConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals"),
])

const config = [...patchedConfig, { ignores: [".next/*"] }]

export default config
