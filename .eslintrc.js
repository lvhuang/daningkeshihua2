module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    'codegen': 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 'project': "./tsconfig.json",    // using for type checking
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': './build/webpack.config.js'
      }
    }
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // include extends and plugins of prettier
    'prettier/@typescript-eslint',
    'plugin:import/typescript'
  ],
  plugins: [],
  rules: {
    // 'prettier/prettier': 0,
    'import/prefer-default-export': 0,   // default editor can not infer
    '@typescript-eslint/explicit-function-return-type': [1, {
      /* 
        https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
        /explicit-function-return-type.md
      */
      'allowExpressions': true
    }],

    'class-methods-use-this': 0,
    'no-debugger': 1
  },
  overrides: [
    {
      files: ['build/*.js'],
      rules: {
      },
    }
  ],
}
