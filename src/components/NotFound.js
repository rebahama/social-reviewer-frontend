import React from 'react';
import styles from '../styles/NotFound.module.css';
import notFound from '../assets/not-found.mp4';
import {
  Container,
  Row
} from 'react-bootstrap';

function NotFound() {
  return (

    <Container>
      <Row className='offset-md-3 offset-sm-3'>
        <video src={notFound} autoPlay loop muted playsInline className={styles.NotFoundGif}/> 
      </Row>
    </Container>

  )
};

export default NotFound