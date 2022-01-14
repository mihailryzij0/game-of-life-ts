module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-alert": "off",
    "no-unused-expressions": "off",
    "no-promise-executor-return": "off",
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
  },
  plugins: ["jest"],
};
