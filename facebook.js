const { FB, FacebookApiException } = require("fb")

require("dotenv").config()

FB.setAccessToken(process.env.FACEBOOK_ACCESS_TOKEN)

async function fetchAlbums(ids) {
  function mapImages(albumId, images) {
    return images.map(({ id, name, source }) => ({ id, description: name, src: source, albumId }))
  }

  function constructMap(albums) {
    return albums.reduce((prev, { id, res }) => ({ ...prev, [id]: mapImages(id, res.data) }), {})
  }

  function allImages(albums) {
    return albums.reduce((prev, { id, res }) => [...prev, ...mapImages(id, res.data)], [])
  }

  return Promise.all(
    ids.map(
      (id) =>
        new Promise((resolve, reject) =>
          FB.api(
            id + "/photos",
            { fields: "name,source" },
            (res) => (!res || res.error ? reject({ id, res }) : resolve({ id, res }))
          )
        )
    )
  ).then((albums) => ({
    albums: constructMap(albums),
    images: allImages(albums),
  }))
}

module.exports = fetchAlbums
