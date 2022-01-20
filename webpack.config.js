const path = require("path");
const webpack = require("webpack");

const config = {
  entry: ["@babel/polyfill", "./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      LOCAL_PORT: 3000,
    }),
    new webpack.DefinePlugin({
      PUBLIC_URL: path.resolve(__dirname, "public"),
    }),
  ],
};

module.exports = config;
