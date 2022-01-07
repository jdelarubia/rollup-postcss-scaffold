/**
 * postcss.config.js
 * 
 * IMPORTANT:
 * purgecss removes some styles after having run nesting that shouldn't.
 * I thought postcss was chaining the changes across plugins but it's not the case.
 * There are workarounds but code is much less organic.
 */

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require("postcss-nesting");
const postcssImports = require("postcss-import");
const purgecss = require("postcss-purgecss");

module.exports = {
  plugins: [
    /* Enables nesting properties in CSS */
    postcssNesting(),

    /* Enable imports in CSS files */
    postcssImports({
      root: "./src/css",
    }),

    /* Adds browser-vendor prefix to properties */
    autoprefixer(),

    /* Clean our CSS at the end of the bundling */
    /* This doesn't work properly. It removes styles that shouldn't */
    // purgecss({
    //   content: ["./dist/**/*.html"],
    //   css: ["./src/**/*.css"],
    // }),

    /* Minifies our CSS bundle */
    cssnano(),
  ],
};
module.exports.postcss = true;
