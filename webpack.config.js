const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: [
        "./src/pug/sample.pug",
        "./src/pug/pages/index.pug",
        "./src/pug/pages/aboutTraining.pug",
        "./src/pug/mixins/indexMixins.pug",
        "./src/pug/mixins/plan.pug",
        "./src/pug/mixins/stages.pug",
        "./src/pug/mixins/trainingCard.pug",
        "./src/pug/includes/consultationForm.pug",
        "./src/pug/includes/footer.pug",
        "./src/pug/includes/header.pug",
        "./src/pug/pages/services.pug",
        "./src/pug/data/indexData.pug",
        "./src/pug/data/servicesData.pug",
        "./src/pug/data/trainingData.pug",
        "./src/pug/data/aboutTrainingData.pug",
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
          minify: false,
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
