import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import './user.css'

function Login(props) {

    const [newUser, setNewUser] = useState({})
    const navigate = useNavigate();

    // e is event
    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        console.log('user:', user)
        setNewUser(user)
    }

    const loginHandler = () => {
        props.login(newUser)
        navigate("/user/home");
    }

  return (
    <div className='login-container'>
        <div className='login-right-container'></div>
        <div className='login-center-container'>
            <h1 className='jobia-title'>JOBIA</h1>
            <h3 className='login'>Login</h3>

            <Container>
                <Form.Group >
                    <div className='label'><Form.Label>Email </Form.Label></div>
                    <div><Form.Control name='email' type='email' onChange={changeHandler}></Form.Control></div>
                </Form.Group>

                <Form.Group>
                <div className='label'><Form.Label>Password </Form.Label></div>
                <div><Form.Control name='password' type='password' onChange={changeHandler}></Form.Control></div>
                </Form.Group>

                <br/>

                <Button className='login-button' variant='primary' onClick={loginHandler}>Login</Button>
            </Container>
        </div>
        <div className='signup-left-container'></div>
    </div>
  )
}

export default Login