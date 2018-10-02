import { Sidebar } from "../components/sidebar"
import Head from "next/head"

export default () => (
  <div className="Page Contact">
    <Head>
      <title>Chainsaw Design | Contact</title>
    </Head>
    <Sidebar />
    <div className="Content">
      <h1>Contact</h1>
      <p>You wanna talk?? </p>
    </div>
  </div>
)
