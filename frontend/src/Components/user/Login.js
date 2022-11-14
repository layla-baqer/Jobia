import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
// the tags used Container, Button, Form.Group ... are from the bootstrap library to make things look good

function Login(props) {

    const [newUser, setNewUser] = useState({})
    // e is event
    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        console.log(user)
        setNewUser(user)
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div>
        <h1>Login</h1>

        {/* <Container>
            <Form.Group>
                <Form.Label>email: </Form.Label>
                <Form.Control name='email' type='email' onChange={changeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password: </Form.Label>
                <Form.Control name='password' type='password' onChange={changeHandler}></Form.Control>
            </Form.Group>

            <br/>

            <Button variant='primary' onClick={loginHandler}>Login</Button>
        </Container> */}

    </div>
  )
}

export default Login