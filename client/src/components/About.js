import React from 'react'
import Sections from './Section';
import {purpose, developers} from './AboutFunctions'
const About = () => {
  return (
    <div className='about-page-container'>

      <h3>
        About pickUp.com
      </h3>

    <Sections title={'Purpose'} content={purpose()}/>
    <Sections title={'About us'} content={developers()}/>
      
      
    </div>
  )
}

export default About
