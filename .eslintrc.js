module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: [
    "simple-import-sort",
    "better-styled-components",
  ],
  env: {
    "browser": true,
  },
  rules: {
    "prettier/prettier": [ "error" ],
    "react/prop-types": 0,
    "better-styled-components/sort-declarations-alphabetically": 2,
    "simple-import-sort/sort": "error",
  },
  globals: {
    "process": true,
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect",
    }
  },
  parser: "@typescript-eslint/parser",
}