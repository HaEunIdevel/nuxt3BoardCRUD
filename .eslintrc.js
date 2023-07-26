module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    // "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  plugins: ["vue"],
  rules: {
    // enable additional rules
    "prettier/prettier": "off",
    "no-undef": "off",
    "vue/multi-word-component-names": "off",
    // "vue/attributes-order": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/html-self-closing": "off",
  },
};
