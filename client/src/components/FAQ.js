import React from 'react'
import Sections from './Section';


import {question1, question2, question3, question4, question5} from './FAQFunctions'

const FAQ = () => {
  return (
    <div className='about-page-container'>
    <h2>
        FAQ
      </h2>

    <Sections title={'What is GameTime Hoops app?'} content={question1()}/>
    <Sections title={'How to use GameTime Hoops app'} content={question2()}/>
    <Sections title={'Do I need to make an account to join games?'} content={question3()}/>
    <Sections title={'What do I need to create a pick up game'} content={question4()}/>



    </div>
  )
}

export default FAQ
