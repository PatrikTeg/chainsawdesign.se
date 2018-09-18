import logo from "../images/logo.png"
import "./index.css"

const Logo = () => <img src={logo} draggable={false} />

export default () => (
  <div className="Index">
    <Logo />
  </div>
)
