module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-a11y/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'a11y/no-outline-none': null,
    'value-keyword-case': null
  },
}