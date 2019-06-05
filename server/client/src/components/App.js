import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Landing from './layouts/Landing'
import Register from './auth/Register'
import Login from './auth/Login'

const App = () => (
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path ="/" component = {Landing}/>
      <section className='container'>
        <Switch>
          <Route exact path ='/register' component = {Register}/>
          <Route exact path ='/login' component = {Login}/>
        </Switch>
      </section>
    </Fragment>

  </Router>
)

export default App
