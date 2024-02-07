module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': ['error', { Dependecies: false }],
  },
};
