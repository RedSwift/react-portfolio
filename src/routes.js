import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import Work from './components/work/work'
import About from './components/about/about'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/work' component={Work} />
    <Route path='/about' component={About} />
  </Route>
)
