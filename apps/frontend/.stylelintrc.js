/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'no-invalid-double-slash-comments': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};
