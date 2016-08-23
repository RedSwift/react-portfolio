import React, { Component } from 'react'
import AppBar from './app_bar'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { postForm } from '../actions/index'
import { browserHistory } from 'react-router'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = { name: '', email: '', content: ''}
  }

  submitForm () {
    event.preventDefault()
    postForm(this.state.name, this.state.email, this.state.content)
    browserHistory.push('/contact/success')
  }

  render () {
    return (
      <div>
        <AppBar />
        <div className='work-cont'>
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

export default connect(null, {postForm})(Contact)
