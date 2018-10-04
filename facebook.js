const { FB, FacebookApiException } = require("fb")

require("dotenv").config()

FB.setAccessToken(process.env.FACEBOOK_ACCESS_TOKEN)

async function fetchAlbums(ids) {
  function mapImages(albumId, images) {
    return images.map(({ id, name, source }) => ({ id, description: name, src: source, albumId }))
  }

  function constructMap(albums) {
    return albums.reduce((prev, { id, images }) => ({ ...prev, [id]: mapImages(id, images) }), {})
  }

  function allImages(albums) {
    return albums.reduce((prev, { id, images }) => [...prev, ...mapImages(id, images)], [])
  }

  function fetchFB(id, after = undefined) {
    return new Promise((resolve, reject) =>
      FB.api(id + "/photos", { fields: "name,source", after }, (res) => {
        if (!res || res.error) {
          return reject((res && res.error) || null)
        }

        return resolve(res)
      })
    )
  }

  async function fetch(id) {
    let images = []
    let after = undefined

    while (true) {
      let res = await fetchFB(id, after)

      if (res.data && res.data.length === 0) {
        break
      }

      images = images.concat(res.data)

      if (res.paging && res.paging.cursors && res.paging.cursors.after) {
        after = res.paging.cursors.after
      }
    }

    return { id, images }
  }

  return Promise.all(ids.map((id) => fetch(id))).then((albums) => ({
    albums: constructMap(albums),
    images: allImages(albums),
  }))
}

module.exports = fetchAlbums
