import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import { GreetingCat } from './components/cats'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cat/:greeting" component={GreetingCat} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
