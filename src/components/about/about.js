import React from 'react'
import AppBar from '../app_bar'
import Skills from './skills'

const About = () => {
  return (
    <div>
      <AppBar />
      <div className='about-cont'>
        <img className='about-pic' src={'http://oi66.tinypic.com/2dtt8p5.jpg'} />
        <div className='margin-left'>
          <h2>About Me</h2>
          <p>
            Graduating from the Web Developer Immersive course from General Assembly
          </p>
        </div>
      </div>
      <hr />
      <h2 className='text-center'>Skills</h2>
      <div className='skill-cont'>
        <Skills />
      </div>
    </div>
  )
}

export default About
