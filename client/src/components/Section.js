import React from 'react'

const Sections = ({title, content}) => {
  return (
    <div className='sections-about'>
      <h1>{title}</h1>
      {content}
    </div>
  )
}

export default Sections