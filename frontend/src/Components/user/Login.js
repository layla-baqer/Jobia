import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
// the tags used Container, Button, Form.Group ... are from the bootstrap library to make things look good
import './user.css'

function Login(props) {

    const [newUser, setNewUser] = useState({})
    // e is event
    const changeHandler = (e) => {
        const user = {...newUser}
        user[e.target.name] = e.target.value
        console.log('user:', user)
        setNewUser(user)
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div className='login-container'>
        <div className='right-container'></div>
        <div className='login-center'>
            <h1 className='jobia-title'>JOBIA</h1>
            <h3 className='login'>Login</h3>

            <Container>
                <Form.Group >
                    <div className='email-label'><Form.Label>Email </Form.Label></div>
                    <div className='email-box'><Form.Control name='email' type='email' onChange={changeHandler}></Form.Control></div>
                </Form.Group>

                <Form.Group>
                <div className='password-label'><Form.Label>Password </Form.Label></div>
                <div className='email-box'><Form.Control name='password' type='password' onChange={changeHandler}></Form.Control></div>
                </Form.Group>

                <br/>

                <Button variant='primary' onClick={loginHandler}>Login</Button>
            </Container>
        </div>
        <div className='left-container'></div>
    </div>
  )
}

export default Login