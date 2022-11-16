import React from 'react'
import './NavBar.css'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar(props) {
  return (
    <div className='navbar-container'>
    {props.isAuth ? (
        <div>
          <ul className="navbar-ul">
          <div><Link to='/user/home'>Home</Link></div>
          <div><Link to={'/profile'}>Profile</Link></div>
          <div><Link to='/about'>About</Link></div>

          <div><Link onClick={props.onLogoutHandler} to="/login">Logout</Link></div>
          </ul>
        </div>
     ) : (
      <div>
       <ul className="navbar-ul">
        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/login">Login</Link></div>
       </ul>
      </div>
     )}

    </div>
  )
}



export default NavBar
