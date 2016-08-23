import React from 'react'
import AppBar from '../app_bar'
import Skills from './skills'

const About = () => {
  return (
    <div>
      <AppBar pageName='About'/>
      <div className='about-cont'>
        <img src={'http://oi66.tinypic.com/2dtt8p5.jpg'} />
        <div className='margin-left'>
          <h2 className='text-center'><u>About Me</u></h2>
          <p>
            Dominic began his pursuit of being a full-stack web developer by completing a three month bootcamp dubbed Web Development Immersive by General Assembly.
          </p>
          <p>
            Passionate about using technology to improve quality of life, Dominic has been spending his time developing personal projects while actively seeking a company to contribute to.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <h2 className='text-center'>Skills</h2>
      <div className='skill-cont'>
        <Skills />
      </div>
    </div>
  )
}

export default About
