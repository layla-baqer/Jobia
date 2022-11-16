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

          <div><Link to="/logout" onClick={props.onLogoutHandler}>Logout</Link></div>
          {/* {props.user ? "Welcome, " + props.user.user.firstName : null} */}
          </ul>
        </div>
     ) : (
      <div>
       <ul className="navbar-ul">
        <div><Link to="/Signup">Signup</Link></div>
        <div><Link to="/Login">Login</Link></div>
       </ul>
      </div>
     )}

    </div>
  )
}



export default NavBar
