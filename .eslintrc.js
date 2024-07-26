module.exports = {
  extends: [
    "universe/native",
    "prettier",
    "plugin:perfectionist/recommended-natural",
  ],
  ignorePatterns: ["node_modules/*.js", "android/*.js", "ios/*.js"],
  plugins: ["prettier", "perfectionist", "lingui"],
  rules: {
    "perfectionist/sort-objects": ["error"],
    "prettier/prettier": ["error"],
  },
};
