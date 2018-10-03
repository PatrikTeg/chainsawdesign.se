//@ts-check
const composePlugins = require("next-compose-plugins")
const typescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const css = require("@zeit/next-css")
const fetchAlbums = require("./facebook")
const albumsMap = require("./albums")

const nextConfig = {
  exportPathMap: async function(defaultPathMap) {
    function albumIds(albumsMap) {
      return Object.keys(albumsMap).map((key) => albumsMap[key].id)
    }

    function albumKey(albumId) {
      return Object.keys(albumsMap).find((key) => albumsMap[key].id === albumId)
    }

    const { albums, images } = await fetchAlbums(albumIds(albumsMap))

    const artworksPathMap = images.reduce(
      (prev, image) => ({
        ...prev,
        ["/artwork/" + albumKey(image.albumId) + "/" + image.id]: {
          page: "/artwork",
          query: { image, album: albumsMap[image.albumId] },
        },
      }),
      {}
    )

    const albumsPathMap = Object.keys(albumsMap).reduce(
      (prev, key) => ({
        ...prev,
        ["/artwork/" + key]: {
          page: "/album",
          query: { images: albums[albumsMap[key].id], name: albumsMap[key].name, key },
        },
      }),
      {}
    )

    return {
      "/": { page: "/", query: { albums } },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      ...artworksPathMap,
      ...albumsPathMap,
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
    [css],
  ],
  nextConfig
)
