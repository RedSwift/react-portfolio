import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import Work from './components/work/work'
import About from './components/about/about'
import WorkDetails from './components/work/work_details'
import Contact from './components/contact'
import ContactSuccess from './components/contact_success'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/work' component={Work} />
    <Route path='/about' component={About} />
    <Route path='/work/:id' component={WorkDetails} />
    <Route path='/contact' component={Contact} />
    <Route path='/contact/success' component={ContactSuccess} />
  </Route>
)
