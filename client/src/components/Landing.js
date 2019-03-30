import React from 'react'
import Video from '../img/shot.mp4'

const Landing = () => {
  return (
    <div>
      <video id='background-video' autoPlay>
        <source src={Video} type='video/mp4' />
      </video>

    </div>
  )
}

export default Landing
