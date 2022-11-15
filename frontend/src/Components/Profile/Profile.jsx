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
      <div>Profile</div>

      {userDetails ?
      <div key={userDetails._id}>
        <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
        <p>Title: {userDetails.title}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Education: {userDetails.education}</p>
        <p>Skills: {userDetails.skills}</p>
        <Link to='/profile/edit'>Edit</Link>
      </div>
      
    :null}

    </div>
  )
}
