import MicroFrontend from '../MicroFrontend'
import { dogsHost } from '../config/environments'

function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />
}

export default Dogs
