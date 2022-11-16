import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import {Container, Form, Button} from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'


export default function Edit() {

  const [editUser, setEditUser] = useState({});
  const [userDetails, setUserDetails] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    let token = localStorage.getItem('token')

    if(token != null) {
      let user = jwt_decode(token)

      if(user) {
        setUser(user)
        console.log(user)
        getUserDetails(user.user.id)
      }
      else if(!user) {
        localStorage.removeItem('token')
      }
    }
  }, [])

const getUserDetails = (userId) => {
  if (user) {
    axios.get(`http://localhost:4000/users/${userId}/details`)
    .then(res => {
      console.log(res.data)
      setUserDetails(res.data)}
      )
    .catch(err => console.log(err))
    }
  }

    const changeHandler = (e) => {
        const user = { ...editUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setEditUser(user);
    }

  const editHandler = () => {
    if (user) {
      axios.put(`http://localhost:4000/users/${user.user.id}`, editUser)
      .then (res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    }
  }

  return (
    <div>
      <div className='title'>Edit</div>

      <div className='main-container'>
        <div className='right-container'></div>
        <div className='center-container'>
          <div className='form-line'></div>
          <div>
            <Container className='form-container'>
                  <Form.Group>
                      <div className='label'><Form.Label>First Name</Form.Label></div>
                      <Form.Control name="firstName" defaultValue={userDetails.firstName} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <div className='label'><Form.Label>Last Name</Form.Label></div>
                      <Form.Control name="lastName" defaultValue={userDetails.lastName} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  
                  <Form.Group>
                      <div className='label'><Form.Label>Phone</Form.Label></div>
                      <Form.Control name="phone" defaultValue={userDetails.phone} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <div className='label'><Form.Label>Email</Form.Label></div>
                      <Form.Control name="email" defaultValue={userDetails.email} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  {/* <Form.Group>
                      <Form.Label>password</Form.Label>
                      <Form.Control name="password" type="password" value={userDetails.password} onChange={changeHandler}></Form.Control>
                  </Form.Group> */}

                  <Form.Group>
                      <div className='label'><Form.Label>Title</Form.Label></div>
                      <Form.Control name="title" type="title" defaultValue={userDetails.title} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <div className='label'><Form.Label>Education</Form.Label></div>
                      <Form.Control name="education" type="education" defaultValue={userDetails.education} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                      <div className='label'><Form.Label>Skills</Form.Label></div>
                      <Form.Control name="skills" type="skills" defaultValue={userDetails.skills} onChange={changeHandler}></Form.Control>
                  </Form.Group>

                  <br></br>

                  {/* <Button className='edit-save-button' variant="primary" onClick={editHandler}>Save</Button> */}
                  <Link to='/profile'><Button className='edit-save-button' variant="primary" onClick={editHandler}>Save</Button></Link>

              </Container>
            </div>
        </div>
        <div className='left-container'></div>
      </div>
    </div>
  )
}
