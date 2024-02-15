module.exports = {
  plugins: [
    'jest',
  ],
  extends: [
    'node-moar',
    'plugin:jest/recommended',
  ],
  rules: {
    'max-lines': ['warn', 200],
    'max-nested-callbacks': ['warn', 3],
    'no-console': 'off',
    'no-sync': 'off',
    'jest/expect-expect': 'off',
    'jest/no-done-callback': 'off',
    'jest/no-conditional-expect': 'off',
    'jest/valid-title': 'warn',
    'node/no-unpublished-require': 'off',
    'node/no-extraneous-require': 'off',
    'promise/no-callback-in-promise': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',
    'sonarjs/no-duplicate-string': 'off',
  },
}
