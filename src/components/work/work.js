import React, { Component } from 'react'
import AppBar from '../app_bar'
import { fetchProject } from '../../actions/index'
import { connect } from 'react-redux'
import PortfolioDetails from './portfolio_details'
import { CircularProgress } from 'material-ui'

class Work extends Component {
  componentWillMount () {
    this.props.fetchProject()
  }

  renderProjects () {
    if (!this.props.project) return (<div> Loading <CircularProgress size={2}/> </div>)
    return this.props.project.map((project, index) => {
      return (
        <div className='work-cont'>
          <PortfolioDetails key={index} project={project}/>
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        <AppBar />
        <h1 className='text-center'>Portfolio</h1>
        {this.renderProjects()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { project: state.project.all }
}

export default connect(mapStateToProps, { fetchProject })(Work)
