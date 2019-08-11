const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const webpackCommon = require("./webpack.common");

module.exports = merge.smart(webpackCommon, {
  mode: "development",
  output: {
    publicPath: "/", // deploy on server with /app/ folder name
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../path_app")
  },
  devServer: {

    contentBase: path.join(__dirname, "path_app"),
    host: "localhost",
    port: 3000,
    publicPath: "/"
  },
  devtool: "cheap-eval-source-map",

});
