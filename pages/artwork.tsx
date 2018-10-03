import { Sidebar } from "../components/sidebar"
import Head from "next/head"
import { Image } from "."

import "./style.css"

type Props = {
  image: Image
}

const Artwork: StatelessPage<Props> = ({ image }) => (
  <div className="Page Artwork">
    <Head>
      <title>Chainsaw Design | Artwork</title>
    </Head>
    <Sidebar />
    <div className="Content wider">
      <h1>Artwork {image.description}</h1>
      <img src={image.src} />
    </div>
  </div>
)

Artwork.getInitialProps = async ({ query: { image } }) => {
  return { image }
}

export default Artwork
