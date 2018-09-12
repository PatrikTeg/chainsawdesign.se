import Head from "next/head";

import logo from "../images/logo.png";
import "./index.css";

export default () => (
  <div className="Index">
    <Head>
      <title>Chainsaw Design</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Head>
    <img src={logo} draggable={false} />
  </div>
);
