import axios from 'axios';
import React, {useState} from 'react'
import {Alert, Button, Container, Form } from'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const SignUp = () => {
    const [signIn, setSignIn] = useState({
        username:'',
        password1:'',
        password2:'',


    });
    const {username, password1, password2} = signIn
    const history = useHistory()
    const [error, setError] = useState({})



const handleInput = (event) => {
    setSignIn({
        ...signIn,
        [event.target.name]: event.target.value,
    });
};

const submitForm = async (event) =>{

    event.preventDefault();
    try {
        await axios.post("/dj-rest-auth/registration/", signIn) 
        history.push('/')
    }catch(err){
        setError(err.response?.data)
    }

}


    return (



        <Form onSubmit={submitForm}>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" value={username} name="username" onChange={handleInput} />
        </Form.Group>

        {error.username?.map((message, idx)=>
        <Alert variant="warning" key={idx}> {message} </Alert>
        
        )}
        <Form.Group className="mb-3" controlId="password1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password1} name="password1" onChange={handleInput} />
        </Form.Group>
        
        {error.password1?.map((message, idx)=>
        <Alert variant="warning" key={idx}> {message} </Alert>
        
        )}
      


        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" value={password2} name="password2" onChange={handleInput} />
        </Form.Group>
        {error.password2?.map((message, idx)=>
        <Alert variant="warning" key={idx}> {message} </Alert>
        
        )}

       

        <Button variant="primary" type="submit">
          Submit
        </Button>

        {error.non_field_errors?.map((message, idx)=>
        <Alert variant="warning" key={idx}> {message} </Alert>
        
        )}

      </Form>




    )
}

export default SignUp