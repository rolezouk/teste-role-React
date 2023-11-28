import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import BaileDosSonhos2210 from './views/baile-dos-sonhos-2210'
import Contatos from './views/contatos'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route
          component={BaileDosSonhos2210}
          exact
          path="/bailedossonhos-22-10"
        />
        <Route component={Contatos} exact path="/contatos" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
