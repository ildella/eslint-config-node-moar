/* eslint-disable max-lines */
module.exports = {
  parserOptions: {
    ecmaVersion: 2022, // syntax only
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
    allowImportExportEverywhere: false,
    requireConfigFile: false,
  },
  env: {
    es2022: true, // globals + syntax
    node: true,
  },
  plugins: [
    'promise',
    'security',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', {
      before: true,
      after: true,
    }],
    'block-scoped-var': 'warn',
    'camelcase': 'warn',
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'complexity': ['warn',5],
    'eol-last': ['warn', 'always'],
    'indent': ['warn', 2],
    'key-spacing': 'warn',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: false,
        ignoreRegExpLiterals: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreUrls: false,
      },
    ],
    'max-lines': ['warn', 150],
    'max-lines-per-function': ['warn', 40],
    'max-statements': ['warn', 15],
    'max-statements-per-line': ['warn', {max: 1}],
    'max-nested-callbacks': ['warn', 2],
    'no-console': 'warn',
    'no-await-in-loop': 'warn',
    'no-empty-function': 'warn',
    'no-extra-parens': 'warn',
    'no-implicit-globals': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-lonely-if': 'warn',
    // 'no-magic-numbers': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-dupe-else-if': 'warn',
    'no-else-return': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'error',
    'no-path-concat': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'warn',
    'no-restricted-properties': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-sync': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-undefined': 'error',
    // 'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'object-curly-newline': ['warn', {
      multiline: true,
      // 'consistent': true,
      minProperties: 4,
    }],
    'object-curly-spacing': 'warn',
    'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}]
    'object-shorthand': ['warn', 'properties'],
    'padded-blocks': ['warn', {
      blocks: 'never',
      switches: 'never',
      classes: 'never',
    }],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'off',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'quotes': ['warn', 'single'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'require-await': 'warn',
    'rest-spread-spacing': 'warn',
    'semi': ['error', 'never'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'warn',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'warn',
    'node/no-extraneous-require': 'error',
    'node/no-unpublished-require': 'warn',
    'node/no-missing-require': 'error',
    'node/shebang': 'off',
    'sonarjs/cognitive-complexity': ['warn', 6],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-duplicate-string': ['warn', 5],
    'sonarjs/no-redundant-jump': 'warn',
    'sonarjs/prefer-object-literal': 'warn',
  },
}
