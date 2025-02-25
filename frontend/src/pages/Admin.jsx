import React from 'react'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <h4>SEE ALL <Link to='/all-users'>USERS!</Link></h4>
      <h4>SEE ALL <Link to='/all-restaurants'>RESTAURANTS!</Link></h4>
      <h4>SEE ALL <Link to='/all-delivery-guys'>DELIVERY GUYS!</Link></h4>
    </div>
  )
}

export default Admin
