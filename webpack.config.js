const path = require('path');
var dotenv = require("dotenv").config({ path: "./.env" });

module.exports = {
  entry: "./charity_finder.jsx",

  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  plugins: new webpack.DefinePlugin({
    "process.env": dotenv.parsed
  })
};

