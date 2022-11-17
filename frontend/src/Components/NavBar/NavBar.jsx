import React from 'react'
import './NavBar.css'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function NavBar(props) {
 
const navigate = useNavigate()

 
  return (
    <div className='navbar-container'>
    {props.isAuth ? (
        <div>
          <ul className="navbar-ul">
          <div><Link to='/user/home'>Home</Link></div>
          <div><Link to={'/profile'}>Profile</Link></div>
          <div><Link to='/about'>About</Link></div>

 
          <div><Link to="/logout" onClick={props.onLogoutHandler}>Logout</Link></div>
          
          {/* <div><Link onClick={() => {
            props.onLogoutHandler()
            navigate('/login')
          }} to="/login">Logout</Link></div> */}
          <div><Link onClick={props.onLogoutHandler} to="/login">Logout</Link></div>
 
          </ul>
        </div>
     ) : (
      <div>
       <ul className="navbar-ul">
 
        <div><Link to="/Signup">Signup</Link></div>
        <div><Link to="/Login">Login</Link></div>
 
        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/login">Login</Link></div>
 
       </ul>
      </div>
     )}

    </div>
  )
}



export default NavBar