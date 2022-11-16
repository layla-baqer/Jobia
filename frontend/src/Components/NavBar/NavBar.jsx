import React from 'react'
import './NavBar.css'
import { Link, useParams } from 'react-router-dom'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar(props) {
  return (

    <div className='navbar-container'>
        <ul className="navbar-ul">
          <div>
            
          <FontAwesomeIcon icon="fa-light fa-user-plus" size='large' />
            <Link to='/user/home'>Home</Link>
          </div>
          <div>
            <li><Link to={'/profile'}>Profile</Link></li>
          </div>
          <div>
            <li><Link to='/Signup'>Sigup</Link></li>
          </div>
          <div>
            <li><Link to='/Login'>Login</Link></li>
          </div>
          <div>
            <li><Link to='/about'>About</Link></li>
          </div>
          <div>
            <li><Link to='/logout' onClick={props.onLogoutHandler}>Logout</Link></li>
          </div>
        </ul>
    </div>
  )
}



export default NavBar
