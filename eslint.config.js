// eslint.config.js
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["node_modules", "dist", "build"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
];
