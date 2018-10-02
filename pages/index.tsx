import "./index.css"
import * as React from "react"
import { Sidebar } from "../components/sidebar"
import Head from "next/head"
import Link from "next/link"

type Props = {
  works: any[]
}

const Grid: React.SFC<Props> = ({ works }) => (
  <div className="Grid">
    {works &&
      works.map((work, i) => (
        <Link href={"/work/" + work.id} key={work.id}>
          <a className="work">
            <img src={work.images[0].source} />
            <div className="info">{work.name}</div>
          </a>
        </Link>
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
