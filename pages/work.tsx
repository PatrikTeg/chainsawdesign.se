import { Sidebar } from "../components/sidebar"
import Head from "next/head"

type Props = {
  item: number
}

const Work: StatelessPage<Props> = ({ item }) => (
  <div className="Page Work">
    <Head>
      <title>Chainsaw Design | Work</title>
    </Head>
    <Sidebar />
    <div className="Content">
      <h1>About {item}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta itaque, alias delectus eveniet ullam
        accusamus, aut quaerat repellendus enim necessitatibus consectetur, repudiandae ipsa esse veniam ut
        exercitationem! Velit, eaque.
      </p>
    </div>
  </div>
)

Work.getInitialProps = async ({ pathname }) => {
  return { item: pathname }
}

export default Work
