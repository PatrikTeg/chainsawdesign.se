import Head from "next/head";

import logo from "../images/logo.png";
import "./index.css";
import { withState } from "recompose";

const Logo = withState("hasLoaded", "setHasLoaded", false)(
  ({ hasLoaded, setHasLoaded }) => (
    <img
      className={hasLoaded ? "loaded" : ""}
      src={logo}
      draggable={false}
      ref={imgRef => {
        if (!imgRef) return;

        if (imgRef.complete) {
          if (!hasLoaded) {
            setTimeout(() => setHasLoaded(true), 100);
          }
        } else {
          imgRef.onload = () => setTimeout(() => setHasLoaded(true), 100);
        }
      }}
    />
  )
);

export default () => (
  <div className="Index">
    <Head>
      <title>Chainsaw Design</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000" />
      <meta name="msapplication-navbutton-color" content="#000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <Logo />
  </div>
);
