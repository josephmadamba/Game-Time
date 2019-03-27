import React from 'react'
import NavBar from './NavBar'
import Tabs from './Tabs'

const Dashboard = ({history}) => {
  return (
    <div>
      <NavBar />
      <Tabs history={history}/>
    </div>
  )
}

export default Dashboard
