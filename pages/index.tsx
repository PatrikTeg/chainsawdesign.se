import * as React from "react"
import { Sidebar } from "../components/sidebar"
import Head from "next/head"
import { Grid } from "../components/grid"

import "./style.css"

export type Image = {
  id: number
  description: string
  src: string
  albumId: number
}

type Props = {
  albums: Record<number, Image[]>
}

const Index: StatelessPage<Props> = ({ albums }) => (
  <div className="Page Index">
    <Head>
      <title>Chainsaw Design</title>
    </Head>
    <Sidebar />
    <Grid images={albums[1487195318248243]} />
  </div>
)

Index.getInitialProps = async ({ query: { albums } }) => {
  return { albums }
}

export default Index
