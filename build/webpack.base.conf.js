"use strict";
const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
const config = require("../config");
const vueLoaderConfig = require("./vue-loader.conf");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        // since there are other svg's in the project
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        exclude: /node_modules\/tb-icons\/lib\/svgs/,
        options: {
          limit: 10000,
          name: utils.assetsPath("images/[name].[ext]")
        }
      },
      {
        // I want to use the svg-sprite-loader to process those svg's in node_modules/tb-icons/lib/svgs 
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ],
        include: /node_modules\/tb-icons\/lib\/svgs/
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
