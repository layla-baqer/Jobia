import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import {Container, Form, Button} from "react-bootstrap";

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
      <div>Edit</div>

      <Container>
            <Form.Group>
                <Form.Label>firstName</Form.Label>
                <Form.Control name="firstName" defaultValue={userDetails.firstName} onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>lastName</Form.Label>
                <Form.Control name="lastName" defaultValue={userDetails.lastName} onChange={changeHandler}></Form.Control>
            </Form.Group>

            
            <Form.Group>
                <Form.Label>phone</Form.Label>
                <Form.Control name="phone" defaultValue={userDetails.phone} onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control name="email" defaultValue={userDetails.email} onChange={changeHandler}></Form.Control>
            </Form.Group>

            {/* <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control name="password" type="password" value={userDetails.password} onChange={changeHandler}></Form.Control>
            </Form.Group> */}

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="title" defaultValue={userDetails.title} onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Education</Form.Label>
                <Form.Control name="education" type="education" defaultValue={userDetails.education} onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Control name="skills" type="skills" defaultValue={userDetails.skills} onChange={changeHandler}></Form.Control>
            </Form.Group>

            <br></br>

            <Button variant="primary" onClick={editHandler}>Save</Button>

        </Container>

    </div>
  )
}
