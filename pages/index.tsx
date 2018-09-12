import Head from "next/head";

import logo from "../images/logo.png";

export default () => (
  <div className="Index">
    <Head>
      <title>Chainsaw Design</title>
      <link rel="stylesheet" href="/static/main.css" type="text/css" />
    </Head>
    <img src={logo} />
  </div>
);
