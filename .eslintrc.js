module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended'
  ],
  plugins: ['prettier', 'cypress', 'chai-friendly'],
  // add your custom rules here
  rules: {
    // Only allow console log and debugger in development
    'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
    'no-console': process.env.PRE_COMMIT
      ? ['error', { allow: ['warn', 'error'] }]
      : 'off',

    // Prettier adds slash at end and so we need to turn this off or it will conflict
    'vue/html-self-closing': 'off',

    // Prettier has an indent already set so this conflicts with it
    'vue/html-indent': 'off'
  }
}
