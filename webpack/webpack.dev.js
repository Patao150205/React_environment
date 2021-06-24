const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, "../src"),
  },
  devtool: "eval-source-map",
});
