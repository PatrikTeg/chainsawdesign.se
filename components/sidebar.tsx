import { InstagramIcon, FacebookIcon } from "./icons"
import * as albumsMap from "../albums"
import { AlbumLink, ActiveLink } from "./ActiveLink"

export const Sidebar: React.SFC<{}> = () => (
  <div className="Sidebar">
    <a href="/">
      <img className="logo" src="/static/logo.png" />
    </a>
    <div className="Links">
      {Object.keys(albumsMap).map((key) => (
        <AlbumLink href={"/artwork/" + key} key={key}>
          {albumsMap[key].name}
        </AlbumLink>
      ))}
    </div>
    <div className="divider" />
    <div className="Links">
      <ActiveLink href="/contact">Contact</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
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
