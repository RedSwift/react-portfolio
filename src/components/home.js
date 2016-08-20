import React, { Component } from 'react'
import AppBar from './app_bar'
import { RaisedButton } from 'material-ui'

class Home extends Component {
  render () {
    return (
      <div>
        <AppBar />
        <div className='main-cont'>
          <h2 className='my-name' >Dominic Lam</h2>
          <img className='front-pic' src={'http://oi64.tinypic.com/1ta3jn.jpg'} />
          <h3>Singapore Based Web Developer</h3>
          <div className='button-group flex'>
            <RaisedButton className='margin-right' primary href='https://github.com/redswift' label='Github'/>
            <RaisedButton className='margin-right' primary href='https://www.linkedin.com/in/lam-jian-xiong-dominic' label='LinkedIn'/>
            <RaisedButton secondary label='GA Profile'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
