import './App.css';
import NavBar from './Components/NavBar/NavBar' 
import Home from './Components/Home/Home'
import Edit from './Components/Edit/Edit'
import Profile from './Components/Profile/Profile'
import Details from './Components/Details/Details'
import About from './Components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Components/user/Signup';
import Login from './Components/user/Login'
import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    let token = localStorage.getItem('token')

    if(token != null) {
      let user = jwt_decode(token)

      if(user) {
        setIsAuth(true)
        setUser(user)
      }
      else if(!user) {
        localStorage.removeItem('token')
        setIsAuth(false)
      }
    }
  }, [])

  const registerHandler = (user) => {
    axios.post('http://localhost:4000/users', user)
    .then (res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // cred for credintials
  const loginHandler = (cred) => {
    axios.post('http://localhost:4000/auth/login', cred)
    .then (res => {
      console.log('token:', res.data.token)

      // store the token in local storage (the user's storage)
      if(res.data.token != null) {
        localStorage.setItem('token', res.data.token)
        let user = jwt_decode(res.data.token)
        setIsAuth(true) // originally it's false
        setUser(user)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

  // const getAllJobs = () => {

  // }

  return (
    <Router>
    <NavBar
      onLogoutHandler={onLogoutHandler}
      isAuth={isAuth}
      user={user}
      />
      <div className="App">
      <Routes>
        <Route path='/home' element={isAuth ? <Home allUsers={getAllUsers}/> : <Login login={loginHandler}/>}></Route>
        <Route path='/edit/:userId' element={<Edit />}></Route>
        <Route path='/profile/:userId' element={<Profile />}></Route>
        <Route path='' element={<Home />}></Route>
        <Route path='/signup' element={<Signup
        register={registerHandler}
        />}></Route>
        <Route path='/login' element={isAuth ? <Home /> : <Login
        login={loginHandler}
        />}></Route>
      </Routes>
      </div>
  </Router>
  );
}

export default App;
