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
              <Link to='/portfolio'><FlatButton label='Portfolio' /></Link>
              <Link to='/about'><FlatButton label='About Me' /></Link>
              <Link to='/contact'><FlatButton label='Contact' /></Link>
            </div>
          }
        />
    )
  }
}

export default AppBar
