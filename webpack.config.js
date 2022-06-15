const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PAGES_DIR = `${path.resolve(__dirname, "src")}/pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [["imagemin-pngquant", { optimizationLevel: 6 }]],
          },
        },
      }),
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: [
        "./src/pug/index.pug",
        "./src/pug/pages/main.pug",
        "./src/pug/pages/services.pug",
        "./src/pug/pages/training.pug",
      ],
      options: {
        usePolling: true,
      },
    },
    port: 4000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "./assets" }],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.pug$/,
        loader: "@webdiscus/pug-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
