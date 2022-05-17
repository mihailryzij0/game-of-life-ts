module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-unused-expressions": "off",
    "no-promise-executor-return": "off",
    "func-names": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": "webpack",
  },
  plugins: ["jest", "@typescript-eslint"],
};
