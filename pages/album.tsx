import { Sidebar } from "../components/sidebar"
import Head from "next/head"
import { Image } from "."
import { Grid } from "../components/grid"

import "./style.css"

type Props = {
  name: string
  images: Image[]
}

const Album: StatelessPage<Props> = ({ name, images }) => (
  <div className="Page Album">
    <Head>
      <title>Chainsaw Design | {name}</title>
    </Head>
    <Sidebar />
    <Grid images={images} />
  </div>
)

Album.getInitialProps = async ({ query: { name, images } }) => {
  return { name, images }
}

export default Album
