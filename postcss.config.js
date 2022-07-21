const breakpoints = require('./src/shared/constants/breakpoints');

module.exports = {
  plugins: [
    "postcss-preset-env",
    "postcss-mixins",
    ['postcss-simple-vars', {
      variables: breakpoints,
    }],
    "postcss-nested",
  ],
}
