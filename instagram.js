const fetch = require("node-fetch")

const url = "https://www.instagram.com/chainsawdesign/"

async function fetchFeed() {
  try {
    const response = await fetch(url)
    const text = await response.text()
    const r = /window\._sharedData\ = (.*);<\/script>/
    const matches = r.exec(text)

    const json = JSON.parse(matches[1])

    console.log(
      JSON.stringify({
        thumbnails: json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.map(
          (edge) => edge.node.thumbnail_src
        ),
      })
    )
  } catch (error) {
    // console.log(error)
  }
}

fetchFeed()
