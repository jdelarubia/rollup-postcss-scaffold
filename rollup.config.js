/**
 * rollup.config.js
 *
 * Outputs one single minified file, dist/js/bundle.js.
 * If NODE_ENV environment variable is set to 'development' or 'dev', generates inline sourcemaps.
 */

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} JavaScript mode bundle`);

export default {
  input: "./src/js/main.js",
  watch: {
    include: "./src/js/**",
  },
  output: {
    file: "./dist/js/bundle.js",
    format: 'es',
    sourcemap: devMode ? "inline" : false,
  },
};
