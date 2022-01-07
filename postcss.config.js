module.exports = {
  plugins: {
    "postcss-import": true /* Enable imports in CSS files */,
    "postcss-nesting": true /* Nesting CSS */,
    autoprefixer: true /* CSS Vendor prefixes */,
    "postcss-purgecss": {
      content: ["./dist/**/*.html"],
      css: ["./src/**/*.css"],
    },
  },
};
