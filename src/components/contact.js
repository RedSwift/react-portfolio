import React, { Component } from 'react'
import AppBar from './app_bar'
import { TextField, RaisedButton } from 'material-ui'
import { browserHistory } from 'react-router'
import axios from 'axios'
import { CircularProgress } from 'material-ui'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = { name: '', email: '', content: '', loading: false }
  }

  submitForm () {
    event.preventDefault()
    this.setState({loading: true})
    axios({
      method: 'post',
      url: 'http://redswift.herokuapp.com/api/contact',
      data: {
        name: this.state.name,
        email: this.state.email,
        content: this.state.content
      }
    }).then(() => {
      this.setState({loading: false})
      browserHistory.push('/contact/success')
    })
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='loader'>
          <CircularProgress size={2} />
          <br />
          <h3>Feeding the server hamsters...</h3>
        </div>
      )
    }
    return (
      <div>
        <AppBar pageName='Contact'/>
        <div className='work-cont padding-left'>
          <p>Looking for me?</p>
          <p>You can drop me an email at jxdlam@gmail.com or use the form below!</p>
          <form className='contact-cont'>
            <TextField
            id='name'
            floatingLabelText='Name'
            hintText='Your name please'
            value={this.state.name}
            onChange={event => this.onNameChange(event.target.value)}
            />
            <TextField
            id='email'
            floatingLabelText='Email/Number'
            hintText='How do i contact you?'
            value={this.state.email}
            onChange={event => this.onEmailChange(event.target.value)}
            />
            <TextField
            id='content'
            floatingLabelText='Content'
            multiLine={true}
            rows={3}
            hintText='What can i do for you?'
            value={this.state.content}
            onChange={event => this.onContentChange(event.target.value)}
            />
          </form>
          <RaisedButton primary label='Submit' onClick={this.submitForm.bind(this)} />
        </div>
      </div>
    )
  }
  onNameChange (name) {
    this.setState({name})
  }
  onEmailChange (email) {
    this.setState({email})
  }
  onContentChange (content) {
    this.setState({content})
  }
}

export default Contact
