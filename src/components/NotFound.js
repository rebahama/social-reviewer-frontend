import React from 'react';
import styles from '../styles/NotFound.module.css';
import notFound from '../assets/not-found.gif';
import {
  Container,
  Row
} from 'react-bootstrap';

function NotFound() {
  return (

    <Container>
      <Row className='offset-md-3 offset-sm-3'>
        <img src={notFound} className={styles.NotFoundGif} alt="404 not found animation" />
      </Row>
    </Container>

  )
};

export default NotFound