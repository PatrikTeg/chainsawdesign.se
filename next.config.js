const composePlugins = require("next-compose-plugins")
const typescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const images = require("next-images")
const css = require("@zeit/next-css")
const fetch = require("node-fetch")

const json = (nextConfig = {}) => {
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

const nextConfig = {
  exportPathMap: async function(defaultPathMap) {
    const res = await fetch(
      "https://graph.facebook.com/v3.1/1487195318248243/photos?fields=name%2Cimages&access_token=" +
        process.env.FACEBOOK_ACCESS_TOKEN
    ).then((res) => res.json())

    const works = res.data.reduce(
      (acc, albumPhoto) => ({ ...acc, ["/work/" + albumPhoto.id]: { page: "/work", query: { data: albumPhoto } } }),
      {
        "/work": { page: "/work" },
      }
    )

    console.log(res.data)

    return {
      "/": { page: "/", query: { data: res.data } },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      ...works,
    }
  },
}

module.exports = composePlugins(
  [
    [
      typescript,
      {
        webpack(config, options) {
          // Do not run type checking twice:
          if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

          return config
        },
      },
    ],
    [json],
    [images],
    [css],
  ],
  nextConfig
)
