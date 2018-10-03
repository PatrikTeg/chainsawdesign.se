import { Sidebar } from "../components/sidebar"
import Head from "next/head"

import "./style.css"

export default () => (
  <div className="Page About">
    <Head>
      <title>Chainsaw Design | About</title>
    </Head>
    <Sidebar />
    <div className="Content">
      <h1>About</h1>
      <p>
        My name is Patrik and I am the sole operator of Chainsaw Design. I create graphics in form of logos, artwork for
        merch and more, with musicians as main clients.
      </p>
      <p>If you like my work, feel free to contact me using the contact link in the sidebar!</p>
      <img src="https://scontent-ort2-1.cdninstagram.com/vp/a51251201f27a7ab5f24b964fd16985e/5C24BAF3/t51.2885-15/sh0.08/e35/c0.89.1080.1080/s640x640/38518780_1852211564857852_3704846425981452288_n.jpg" />
    </div>
  </div>
)
