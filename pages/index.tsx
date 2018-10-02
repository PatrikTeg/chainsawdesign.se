import "./index.css"
import * as React from "react"
import { Sidebar } from "../components/sidebar"
import Head from "next/head"
import Link from "next/link"

const works = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const Grid: React.SFC<{}> = () => (
  <div className="Grid">
    {works.map((i) => (
      <Link href="/work" key={i}>
        <a className="work">
          <img src={require("../images/artwork/work" + i + ".jpg")} />
          <div className="info">Work {i}</div>
        </a>
      </Link>
    ))}
  </div>
)

export default () => (
  <div className="Page Index">
    <Head>
      <title>Chainsaw Design</title>
    </Head>
    <Sidebar />
    <Grid />
  </div>
)
