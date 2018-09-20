const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const withImages = require("next-images")
const withCSS = require("@zeit/next-css")

const withJSONLoader = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        )
      }

      const assetPrefix = nextConfig.assetPrefix || ""

      config.module.rules.push({
        test: /\.json$/,
        use: [
          {
            loader: "json-loader",
            options: {
              fallback: "file-loader",
              publicPath: `${assetPrefix}/_next/static/`,
              outputPath: `${isServer ? "../" : ""}static/`,
              name: "[name]-[hash].[ext]",
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

module.exports = {
  ...withCSS(
    withJSONLoader(
      withImages(
        withTypescript({
          webpack(config, options) {
            // Do not run type checking twice:
            if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

            return config
          },
        })
      )
    )
  ),
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" },
    }
  },
}
