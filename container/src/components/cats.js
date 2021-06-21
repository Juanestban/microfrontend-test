import MicroFrontend from '../MicroFrontend'
import Header from './Header'
import { catsHost } from '../config/environments'

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />
}

function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  )
}

export { GreetingCat }

export default Cats
