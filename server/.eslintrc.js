module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "simple-import-sort",
  ],
  rules: {
    // "@typescript-eslint/no-explicit-any": 0,
    // "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars" : [
      2, { "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    "simple-import-sort/sort": "error",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: ".",
  }
}