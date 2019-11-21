module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    "plugin:vue/strongly-recommended",
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
    '@vue/typescript'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  plugins: ['vue'],
}
