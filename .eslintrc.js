module.exports = {
  'env': {
    'jquery': true,
    'node': true,
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? true : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? true : 0,
    'indent': [
      'error',
      2
    ],
    // 'linebreak-style': [
    //     'error',
    //     'unix'
    // ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
