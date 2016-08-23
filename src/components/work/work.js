import React, { Component } from 'react'
import AppBar from '../app_bar'
import { fetchProject } from '../../actions/index'
import { connect } from 'react-redux'
import PortfolioDetails from './portfolio_details'

class Work extends Component {
  componentWillMount () {
    this.props.fetchProject()
  }

  renderProjects () {
    return this.props.project.map((project, index) => {
      return (
        <div key={index} className='work-cont'>
          <PortfolioDetails project={project}/>
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

Work.propTypes = {
  fetchProject: React.PropTypes.func,
  project: React.PropTypes.array
}

function mapStateToProps (state) {
  return { project: state.project.all }
}

export default connect(mapStateToProps, { fetchProject })(Work)
