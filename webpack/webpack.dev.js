const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 8000,
    contentBase: "../src",
  },
  devtool: "eval-source-map",
});
