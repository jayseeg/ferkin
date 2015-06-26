// NPM
import React from 'react'
import Router from 'react-router'
import {
  DefaultRoute,
  Link,
  Route,
  RouteHandler
} from 'react-router'

// Components
import LoginHandler from './components/Login.js'

const App = React.createClass({

  render() {

    return (
      <div className='container'>
        <header className='nav'>
          <ul className='headerNav'>
            <li>
              <Link to='app'>ferkin Home</Link>
            </li>
            <li>
              <Link to='login'>ferkin Login</Link>
            </li>
          </ul>
        </header>
        <section>
          <RouteHandler />
        </section>
      </div>
    )
  },

})

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='login' path='/login' handler={LoginHandler}/>
  </Route>
)

Router.run(routes, Handler => React.render(<Handler />, document.body))