module.exports = {
  ignorePatterns: ['node_modules/*.js', 'android/*.js', 'ios/*.js'],
  extends: ['universe/native', 'prettier', 'plugin:perfectionist/recommended-natural'],
  plugins: ['prettier', 'perfectionist'],
  rules: {
    'prettier/prettier': ['error'],
    'perfectionist/sort-objects': ['error'],
  },
}
