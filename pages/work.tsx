import { Sidebar } from "../components/sidebar"
import Head from "next/head"

type Props = {
  name: string
  image: string
}

const Work: StatelessPage<Props> = ({ name, image }) => (
  <div className="Page Work">
    <Head>
      <title>Chainsaw Design | Work</title>
    </Head>
    <Sidebar />
    <div className="Content">
      <h1>Work {name}</h1>
      <img src={image} />
    </div>
  </div>
)

Work.getInitialProps = async ({ query }) => {
  console.log(query.data)
  return { name: query.data.name, image: query.data.images[0].source }
}

export default Work
