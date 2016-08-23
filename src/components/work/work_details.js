import React, { Component } from 'react'
import { showProject } from '../../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AppBar from '../app_bar'
import { RaisedButton } from 'material-ui'

class WorkDetails extends Component {
  componentWillMount () {
    this.props.showProject(this.props.params.id)
  }

  render () {
    const project = this.props.project
    return (
      <div>
        <AppBar />
        <div className='work-cont'>
          <Link to='/work'><RaisedButton secondary label='Back' /></Link>
          <div className='port-cont'>
            <img src={project.picture} />
            <div className='margin-left'>
              <h2>Description</h2>
              <p>{project.description}</p>
              <RaisedButton primary label='Demo' href={project.demo} />
              <RaisedButton className='margin-left' primary label='Github' href={project.github} />
            </div>
        </div>
        </div>
      </div>
    )
  }
}

WorkDetails.propTypes = {
  params: React.PropTypes.string,
  showProject: React.PropTypes.func,
  project: React.PropTypes.array
}

function mapStateToProps (state) {
  return { project: state.project.show }
}

export default connect(mapStateToProps, {showProject})(WorkDetails)
