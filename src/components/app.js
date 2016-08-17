import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}
