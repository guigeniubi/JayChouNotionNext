module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'standard',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    semi: 0,
    'react/no-unknown-property': 'off', // <style jsx>
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    '@typescript-eslint/no-explicit-any': 'off'
  },
  globals: {
    React: true
  },
  parser: '@typescript-eslint/parser'
}
