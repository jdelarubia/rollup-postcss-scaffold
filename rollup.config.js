const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} JavaScript mode bundle`);

export default {
  input: "./src/js/main.js",
  watch: {
    include: "./src/js/**",
  },
  output: {
    file: "./dist/js/bundle.js",
    format: "iife",
    sourcemap: devMode ? "inline" : false,
  },
};
