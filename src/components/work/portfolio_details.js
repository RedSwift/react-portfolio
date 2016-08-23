import React from 'react'
import { RaisedButton } from 'material-ui'
import { Link } from 'react-router'

const PortfolioDetails = (props) => {
  const project = props.project

  return (
    <div className='port-cont'>
      <img className='port-pic' src={project.picture} alt='portfolio pic' />
      <div className='margin-left'>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <Link to={`work/${project._id}`}><RaisedButton primary label='View Project' /></Link>
      </div>
    </div>
  )
}

PortfolioDetails.propTypes = {
  project: React.PropTypes.array
}

export default PortfolioDetails
