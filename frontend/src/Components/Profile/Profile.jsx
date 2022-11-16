import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import Edit from '../Edit/Edit';
import { Link, useParams } from 'react-router-dom'



export default function Profile() {

  const [userDetails, setUserDetails] = useState([])

      // useEffect(() => {
      //   // the route will be modified if we need a specific user's tweets ../tweets/${id}

      //   // take the tweet list data & store it in a state setState(response)
      //   axios.get(`http://localhost:4000/users/${userId}/details`)
      //   .then(res => setUserDetails(res.data))
      //   .catch(err => console.log(err))

      //   getUserDetails()
      // }, [])

      useEffect(() => {
        let token = localStorage.getItem('token')
    
        if(token != null) {
          let user = jwt_decode(token)
    
          if(user) {
            getUserDetails(user.user.id)
          }
          else if(!user) {
            localStorage.removeItem('token')
          }
        }
      }, [])

      const getUserDetails = (userId) => {
        axios.get(`http://localhost:4000/users/${userId}/details`)
        .then(res => {
          console.log(res.data)
          setUserDetails(res.data)}
          )
        .catch(err => console.log(err))
      }

  return (
    <div>
      <div className='title'>Profile</div>

      <div className='main-container'>
        <div className='right-container'></div>
        <div className='center-container'>
          <div className='user-profile-line'></div>
        {userDetails ?
          <div className='user-details-container' key={userDetails._id}>
            <div>
              <div className='user-title'>Name:</div>
              <div className='user-detail'>{userDetails.firstName} {userDetails.lastName}</div>
            </div>
            <div>
              <div className='user-title'>Title:</div>
              <div className='user-detail'>{userDetails.title}</div>
            </div>
            <div>
              <div className='user-title'>Email:</div>
              <div className='user-detail'>{userDetails.email}</div>
            </div>
            <div>
              <div className='user-title'>Phone:</div>
              <div className='user-detail'>{userDetails.phone}</div>
            </div>
            <div>
              <div className='user-title'>Education:</div>
              <div className='user-detail'>{userDetails.education}</div>
            </div>
            <div>
              <div className='user-title'>Skills:</div>
              <div className='user-detail'>{userDetails.skills}</div>
            </div>
            <div className='edit-button-container'>
              <Link to='/profile/edit'><button className='edit-button'>Edit</button></Link>
            </div>
          </div>
        :null}
      </div>
      <div className='left-container'></div>
      </div>
    </div>
  )
}

