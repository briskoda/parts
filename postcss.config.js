const purgecss = require("@fullhuman/postcss-purgecss");
const ENV = process.env.NODE_ENV;

let Config = {
  plugins: [require("tailwindcss"), require("autoprefixer")]
};

if (ENV === "production") {
  Config = merge(Config, {
    plugins: [
      purgecss({
        content: ["./**/*.html"]
      })
    ]
  });
}

module.exports = Config;
