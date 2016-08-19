import React from 'react'
import { RaisedButton } from 'material-ui'

const PortfolioDetails = (props) => {
  return (
    <div className='port-cont'>
      <img className='port-pic' src='http://oi66.tinypic.com/2dtt8p5.jpg' alt='portfolio pic' />
      <div className='margin-left'>
        <h2>Description</h2>
        <p>{props.project.description}</p>
        <RaisedButton primary label='View Project' />
      </div>
    </div>
  )
}

export default PortfolioDetails
