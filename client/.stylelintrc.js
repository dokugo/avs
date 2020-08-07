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
    'a11y/media-prefers-reduced-motion': null,
    'a11y/no-outline-none': null,
    'a11y/selector-pseudo-class-focus': null,
    'comment-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-case': null,
    'selector-type-no-unknown' : null,
    'value-keyword-case': null
  },
}