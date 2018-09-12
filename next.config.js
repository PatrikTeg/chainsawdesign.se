const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = {
  ...withCSS(
    withTypescript(
      withImages({
        webpack(config, options) {
          // Do not run type checking twice:
          if (options.isServer)
            config.plugins.push(new ForkTsCheckerWebpackPlugin());

          return config;
        }
      })
    )
  ),
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" }
    };
  }
};
