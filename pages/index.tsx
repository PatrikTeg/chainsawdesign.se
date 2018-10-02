import "./index.css"
import * as React from "react"
import { Sidebar } from "../components/sidebar"
import Head from "next/head"

type Props = {
  works: any[]
}

const Grid: React.SFC<Props> = ({ works }) => (
  <div className="Grid">
    {works &&
      works.map((work, i) => (
        <a className="work" href={"/work/" + work.id} key={work.id}>
          <img src={work.images[0].source} />
          <div className="info">{work.name}</div>
        </a>
      ))}
  </div>
)

const Index: StatelessPage<Props> = ({ works }) => (
  <div className="Page Index">
    <Head>
      <title>Chainsaw Design</title>
    </Head>
    <Sidebar />
    <Grid works={works} />
  </div>
)

Index.getInitialProps = async ({ query }) => {
  console.log("tratt")
  console.log(query)
  return { works: query.data }
}

export default Index
