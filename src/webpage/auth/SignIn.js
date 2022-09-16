import React, { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { Alert, Button, Container, Form, Col, Row } from 'react-bootstrap'
import {useSetCurrentUser } from '../../context/CurrentUserContext';

const SignIn = () => {
const setCurrentUser = useSetCurrentUser()
  const [SignIn, SetSignIn] = useState({
    username: "",
    password: "",

  });
  const { username, password } = SignIn;
  const [error, setError] = useState({})
  const history = useHistory();

  
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.post("/dj-rest-auth/login/", SignIn)
      setCurrentUser(data.user)
      history.push('/')
    } catch (err) {
      setError(err.response?.data)
    }

  }

  const handleInput = (event) => {
    SetSignIn({
      ...SignIn,
      [event.target.name]: event.target.value,

    });
  };

  return (
    <Container>
      <h3> Log in </h3>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} name="username" onChange={handleInput} />
        </Form.Group>
        {error.username?.map((message, idx) =>
          <Alert variant="warning" key={idx}> {message} </Alert>
        )}

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={handleInput} />
          
          {error.password?.map((message, idx) =>
            <Alert variant="warning" key={idx}> {message} </Alert>

          )}

          <Link to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>

        {error.non_field_errors?.map((message, idx) =>
                <Alert variant="warning" key={idx}> {message} </Alert>
              )}
      </Form>
    </Container>
  )
}

export default SignIn