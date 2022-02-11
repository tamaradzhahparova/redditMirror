const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: "ts-loader" },
      // {
      //   test: /\.less$/,
      //   use: [ {
      //     loader: 'css-loader',
      //     options: {
      //       modules: {
      //         mode: 'local',
      //         localIdentName: '[name]__[local]--[hash:base64:5]',
      //       },
      //       onlyLocals: true,
      //     }
      //   },
      //   'less-loader']
      // }

      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'] // для добавления стилей глобально
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
