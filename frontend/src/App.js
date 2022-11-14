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


function App() {
  return (
    <Router>
    {/* <NavBar onLogoutHandler={onLogoutHandler} isAuth={isAuth}/> */}
    <NavBar></NavBar>
    <div className="App">
      <Routes>
        {/* <Route path='/home' element={isAuth ? <HomePage /> : <Signin login={loginHandler}></Signin>} />
        <Route path='/edit/:userId' element={<EditPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/detail/:tweetId' element={<DetailPage />} />
        <Route path='*' element={<HomePage />} /> */}

        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
