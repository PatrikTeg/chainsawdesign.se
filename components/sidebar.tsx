import logo from "../images/logo.png"

import Link from "next/link"
import { InstagramIcon, FacebookIcon } from "./icons"

export const Sidebar: React.SFC<{}> = () => (
  <div className="Sidebar">
    <a href="/">
      <img className="logo" src={logo} />
    </a>
    <div className="Links">
      <a href="/">Logotypes</a>
      <a href="/">Album covers</a>
      <a href="/">Merch designs</a>
      <a href="/">Miscellaneous</a>
      <a href="/">Art for sale</a>
    </div>
    <div className="divider" />
    <div className="Links">
      <a href="/contact">Contact</a>
      <a href="/about">About</a>
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
