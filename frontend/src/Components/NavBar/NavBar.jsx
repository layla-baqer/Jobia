import React from 'react'
import './NavBar.css'
import { Link, useParams } from 'react-router-dom'


function NavBar(props) {
  return (

    <div>
      
        <ul className="navbar-ul">
          <li><Link to='/user/home'>Home</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
          <li><Link to='/Signup'>Sigup</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/logout' onClick={props.onLogoutHandler}>Logout</Link></li>
        </ul>
    </div>
  )
}



export default NavBar
