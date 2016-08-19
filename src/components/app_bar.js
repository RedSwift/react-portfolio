import React, { Component } from 'react'
import { Link } from 'react-router'
import MaterialAppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class AppBar extends Component {
  render () {
    return (
        <MaterialAppBar
          showMenuIconButton={false}
          iconElementRight={
            <div>
              <Link to='/'><FlatButton label='home' /></Link>
              <Link to='/work'><FlatButton label='work' /></Link>
              <Link to='/about'><FlatButton label='About' /></Link>
              <Link to='/contact'><FlatButton label='Contact' /></Link>
            </div>
          }
        />
    )
  }
}

export default AppBar
