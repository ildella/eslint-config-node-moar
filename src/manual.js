// manually generated until I can make the on-the-fly conversion from YAML work
module.exports = {
  'env': {
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'plugins': [
    'sonarjs',
    'jest'
  ],
  'rules': {
    'complexity': [
      'warn',
      5
    ],
    'eol-last': [
      'warn',
      'always'
    ],
    'indent': [
      'warn',
      2
    ],
    'key-spacing': 'warn',
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreComments': false,
        'ignoreRegExpLiterals': false,
        'ignoreStrings': false,
        'ignoreTemplateLiterals': false,
        'ignoreUrls': false
      }
    ],
    'max-lines': [
      'warn',
      150
    ],
    'max-statements': [
      'warn',
      15
    ],
    'max-lines-per-function': [
      'warn',
      40
    ],
    'max-nested-callbacks': [
      'warn',
      2
    ],
    'no-console': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'no-path-concat': 'warn',
    'no-process-exit': 'warn',
    'no-sync': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'object-curly-newline': 'warn',
    'object-curly-spacing': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'off',
    'prefer-spread': 'warn',
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'space-before-function-paren': 'warn',
    'node/no-extraneous-require': 'error',
    'node/no-unpublished-require': 'warn',
    'node/shebang': 'off',
    'jest/no-disabled-tests': 'warn',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',
    'sonarjs/cognitive-complexity': [
      'warn',
      6
    ],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-duplicate-string': [
      'warn',
      4
    ]
  },
  'overrides': {
    'files': [
      '**/tests/**',
      '**/fixtures/**'
    ],
    'rules': {
      'node/no-unpublished-require': 'off',
      'max-nested-callbacks': [
        'error',
        3
      ],
      'max-lines': [
        'warn',
        200
      ],
      'sonarjs/no-duplicate-string': 'off',
      'no-console': 'off',
      'no-sync': 'off',
    }
  }
}
