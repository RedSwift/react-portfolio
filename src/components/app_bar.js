import React, { Component } from 'react'
import MaterialAppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class AppBar extends Component {
  render () {
    return (
        <MaterialAppBar
          showMenuIconButton={false}
          iconElementRight={
            <div>
              <FlatButton label='Portfolio' />
              <FlatButton label='About Me' />
              <FlatButton label='Contact' />
            </div>
          }
        />
    )
  }
}

export default AppBar
