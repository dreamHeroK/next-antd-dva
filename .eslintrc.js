module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  globals: {
    __DEV__: true,
  },
};
