/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', '@babel', 'import', 'unused-imports', 'react', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.json', '.css', '.scss', '.svg', '.png'],
    'import/resolver': {
      "typescript": {
        "project": ["tsconfig.json", "apps/frontend/tsconfig.json", , "packages/tiptap-extensions/tsconfig.json"]
      },
    },
  },
  rules: {
    // TODO: work on removing any from codebase
    '@typescript-eslint/no-explicit-any': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'es5',
        semi: true,
        endOfLine: 'lf',
        jsxSingleQuote: false,
        tabWidth: 2,
        arrowParens: 'always',
        useTabs: false,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': ['error', 'always', { generators: 'as-needed' }],
    'react/hook-use-state': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-array-index-key': 'warn', // FIXME: enable this when integration
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    '@next/next/no-img-element': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.scss'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '#/**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false,
        ignore: ['.svg'],
      },
    ],
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_query'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'newline-before-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'cjs-export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'if',
        prev: '*',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
    'default-param-last': 'warn',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^evt'] }],
  },
  ignorePatterns: ['.eslintrc.cjs', 'next.config.js', 'ecosystem.config.cjs', 'jest.config.js'],
};

module.exports = config;
