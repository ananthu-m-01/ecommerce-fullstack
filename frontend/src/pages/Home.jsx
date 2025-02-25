import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <p>This page will contain Home Page details</p>
        <h3><Link to='/login'>Click Here</Link>to join us!</h3>
      </div>
    </div>
  )
}

export default Home
