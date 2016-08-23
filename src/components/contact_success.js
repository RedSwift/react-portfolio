import React from 'react'
import AppBar from './app_bar'
import { Link } from 'react-router'
import { RaisedButton } from 'material-ui'

const ContactSuccess = () => {
  return (
    <div>
      <AppBar pageName='Contact'/>
      <div className='work-cont'>
        <Link to='/'><RaisedButton primary label='Home' /></Link>
        <h1>Your details has been received!</h1>
        <h3>I will contact you within the next 48 hours regarding your email. Thanks!</h3>
      </div>
    </div>
  )
}

export default ContactSuccess
