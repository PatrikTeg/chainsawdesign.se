import { Image } from "../pages"
import * as albumsMap from "../albums"

type Props = {
  images: Image[]
}

function albumKey(albumId: number) {
  return Object.keys(albumsMap).find((key) => albumsMap[key].id === albumId)
}

export const Grid: React.SFC<Props> = ({ images }) => (
  <div className="Grid">
    {images.map((image) => (
      <a className="artwork" href={"/artwork/" + albumKey(image.albumId) + "/" + image.id} key={image.id}>
        <div className="img" style={{ backgroundImage: "url('" + image.src + "')" }} />
        <div className="info">{image.description}</div>
      </a>
    ))}
  </div>
)
