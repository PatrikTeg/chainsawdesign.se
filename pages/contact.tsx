import { Sidebar } from "../components/sidebar"
import Head from "next/head"

import "./style.css"

function sendMail(subject: string, content: string) {
  document.location.href =
    "mailto:contact@chainsawdesign.se?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(content)
}

export default () => (
  <div className="Page Contact">
    <Head>
      <title>Chainsaw Design | Contact</title>
    </Head>
    <Sidebar />
    <div className="Content">
      <h1>Contact</h1>
      <form
        onSubmit={(e: any) => {
          e.preventDefault()

          const { type, message } = e.nativeEvent.target.elements

          sendMail(type.value, message.value)
        }}
      >
        <div className="field">
          <label htmlFor="type">Type of work:</label>
          <select id="type">
            <option>Logotype</option>
            <option>Album cover</option>
            <option>Merch design</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows={10} />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
)
