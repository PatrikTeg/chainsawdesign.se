import logo from "../images/logo.png"

import Link from "next/link"
import { InstagramIcon, FacebookIcon } from "./icons"

export const Sidebar: React.SFC<{}> = () => (
  <div className="Sidebar">
    <Link href="/">
      <a>
        <img className="logo" src={logo} />
      </a>
    </Link>
    <div className="Links">
      <Link href="/">
        <a>Logotypes</a>
      </Link>
      <Link href="/">
        <a>Album covers</a>
      </Link>
      <Link href="/">
        <a>Merch designs</a>
      </Link>
      <Link href="/">
        <a>Miscellaneous</a>
      </Link>
      <Link href="/">
        <a>Art for sale</a>
      </Link>
    </div>
    <div className="divider" />
    <div className="Links">
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <div className="divider" />
    <div className="Icons">
      <a className="Icon" href="https://www.instagram.com/chainsawdesign">
        <InstagramIcon />
        /ChainsawDesign
      </a>
      <a className="Icon" href="https://www.facebook.com/ChainsawDesign">
        <FacebookIcon />
        /ChainsawDesign
      </a>
    </div>
  </div>
)
