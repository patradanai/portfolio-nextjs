const webpack = require("webpack");

module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.plugins.push(new webpack.DefinePlugin({ "global.GENTLY": false }));
    return config;
  },
  crossOrigin: "anonymous",
  images: {
    domains: ["cdn.aglty.io"],
  },
};
