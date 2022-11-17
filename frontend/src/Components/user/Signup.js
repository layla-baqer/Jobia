import React, {useState} from 'react'
import {Container, Form, Button} from "react-bootstrap";
import s

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
    <div>
        <h1>Signup</h1>


        <Container>
            <Form.Group>
                <Form.Label>firstName</Form.Label>
                <Form.Control name="firstName" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>lastName</Form.Label>
                <Form.Control name="lastName" onChange={changeHandler}></Form.Control>
            </Form.Group>

            
            <Form.Group>
                <Form.Label>phone</Form.Label>
                <Form.Control name="phone" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control name="email" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="title" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Education</Form.Label>
                <Form.Control name="education" type="education" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Control name="skills" type="skills" onChange={changeHandler}></Form.Control>
            </Form.Group>

            <br></br>

            <Button variant="primary" onClick={regsiterHandler}>Register</Button>

        </Container>
        
    </div>
  )
}

