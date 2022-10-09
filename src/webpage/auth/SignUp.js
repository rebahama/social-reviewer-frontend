import axios from 'axios';
import React, {
  useState
} from 'react';
import {
  Alert,
  Button,
  Container,
  Form,
  Col,
  Row
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom/cjs/react-router-dom.min';
import rocketGif from '../../assets/rocket.gif';
import styles from '../../styles/SignUp.module.css';

const SignUp = () => {
  const [signIn, setSignIn] = useState({
    username: '',
    password1: '',
    password2: '',

  });
  const {
    username,
    password1,
    password2
  } = signIn;
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (event) => {
    setSignIn({
      ...signIn,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {

    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signIn);
      setMessage(<><p> Congratulations! Your account have been successfully created please, click the symbol below to log in to your new account</p>
      <Link to="/signin"  className={styles.CreateText}><i className="fa-solid fa-arrow-right-to-bracket"></i> </Link> </>);
      
    } catch (err) {
      setError(err.response?.data);
    }

  };


  return (

    <Container>
      <h3 className={styles.AccountText}> Create an account </h3>
      <hr />
      <div className={styles.AllContent}>
        <Row md={12}>
          <Col md={6}>
            <Form onSubmit={submitForm}>
              <h2 className={styles.AccountText}> Are you ready for take of? Please create an account to get started</h2>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} name="username" onChange={handleInput} />
              </Form.Group>

              {error.username?.map((message, idx) =>
                <Alert variant="warning" key={idx}> {message} </Alert>

              )}
              <Form.Group className="mb-3" controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password1} name="password1" onChange={handleInput} />
              </Form.Group>

              {error.password1?.map((message, idx) =>
                <Alert variant="warning" key={idx}> {message} </Alert>

              )}
              <Form.Group className="mb-3" controlId="password2">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" value={password2} name="password2" onChange={handleInput} />
              </Form.Group>
              {error.password2?.map((message, idx) =>
                <Alert variant="warning" key={idx}> {message} </Alert>

              )}
              <Button variant="primary" type="submit">
                Create account
              </Button>
              {error.non_field_errors?.map((message, idx) =>
                <Alert variant="warning" key={idx}> {message} </Alert>
              )}
            </Form>
            {message}
          </Col>
        </Row>
        <img src={rocketGif} className={styles.RocketImage} alt="rocket taking off"></img>
      </div>
    </Container>

  )
};

export default SignUp