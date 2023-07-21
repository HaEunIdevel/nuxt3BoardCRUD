module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  plugins: ["vue"],
  rules: {
    // enable additional rules
  },
};
