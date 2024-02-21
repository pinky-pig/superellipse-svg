import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,
    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,
    md: false,
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/fixtures',
    ],
    vue: {
      overrides: {
        'vue/operator-linebreak': ['error', 'before'],
      },
    },
    typescript: {
      overrides: {
      },
    },
    yaml: {
      overrides: {
      },
    },

  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {
      'ts/consistent-type-definitions': 'off',
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      'style/semi': ['error', 'never'],
      'unused-imports/no-unused-vars': 'off',
    },
  },

)
