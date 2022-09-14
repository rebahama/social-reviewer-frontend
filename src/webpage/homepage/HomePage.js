import React from 'react'
import smiley from '../../assets/smiley.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import styles from '../../styles/HomePage.module.css'


function HomePage() {
    return (
<Container fluid>
        <Row>
            <Col md={12} className={styles.HeroImage}> </Col>
        </Row>
</Container>
  )
}

export default HomePage