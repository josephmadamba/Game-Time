import React from 'react'

const Sections = ({title, content}) => {
  return (
    <div className='sections-about'>
      <h3>{title}</h3>
      {content}
    </div>
  )
}

export default Sections