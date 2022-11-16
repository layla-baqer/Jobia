import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import './user.css'

export default function Signup(props) {

    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const regsiterHandler = () => {
        props.register(newUser)
    }

  return (
    <div className='signup-container'>
        <div className='signup-right-container'></div>
        <div className='signup-center-container'>
            <h1 className='jobia-title'>JOBIA</h1>
            <h3 className='signup'>Signup</h3>


            <Container>
                <Form.Group>
                    <div className='label'><Form.Label>First Name</Form.Label></div>
                    <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Last Name</Form.Label></div>
                    <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
                </Form.Group>

                
                <Form.Group>
                <div className='label'><Form.Label>Phone</Form.Label></div>
                    <Form.Control name="phone" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Email</Form.Label></div>
                    <Form.Control name="email" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Password</Form.Label></div>
                    <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Title</Form.Label></div>
                    <Form.Control name="title" type="title" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Education</Form.Label></div>
                    <Form.Control name="education" type="education" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Skills</Form.Label></div>
                    <Form.Control name="skills" type="skills" onChange={changeHandler}></Form.Control>
                </Form.Group>

                <br></br>

                <Button className='signup-button' variant="primary" onClick={regsiterHandler}>Register</Button>

            </Container>
        </div>
        <div className='signup-left-container'></div>
    </div>
  )
}

