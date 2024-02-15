module.exports = {
  plugins: [
    'fp',
    'unicorn',
  ],
  extends: [
    'node-moar',
    'plugin:fp/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    'fp/no-let': 'warn',
    'fp/no-nil': 'off',
    'fp/no-mutation': ['warn', {
      commonjs: true,
      allowThis: true,
      exceptions: [],
    }],
    'fp/no-rest-parameters': 'off',
    'fp/no-unused-expression': 'warn',
    'unicorn/escape-case': 'warn',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'warn',
    'unicorn/no-array-for-each': 'off', // does not sounds right to me
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-array-callback-reference': 'off', // does not sounds right to me
    'unicorn/no-fn-reference-in-iterator': 'off', // does not sounds right to me
    'unicorn/no-process-exit': 'off', // eslint already has it
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'warn',
  },
}
