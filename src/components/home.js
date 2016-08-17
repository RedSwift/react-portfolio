import React, { Component } from 'react'
import AppBar from './app_bar'

class Home extends Component {
  render () {
    return (
      <div>
        <AppBar />
        <h2 className='my-name' >Dominic Lam</h2>
      </div>
    )
  }
}

export default Home
