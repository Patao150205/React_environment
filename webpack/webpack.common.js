const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { bundle: "./src/index.tsx" },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: { localIdentName: "[local]-[hash]" }, sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true } }],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: { localIdentName: "[local]-[hash]" }, sourceMap: true } },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name]-[contenthash].[ext]", outputPath: "images", publicPath: "/images" },
          },
          { loader: "image-webpack-loader" },
        ],
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: path.resolve(__dirname, "../src/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  target: ["web", "es5"],
  resolve: {
    extensions: [".ts", ".js", "jsx", ".tsx"],
  },
};
