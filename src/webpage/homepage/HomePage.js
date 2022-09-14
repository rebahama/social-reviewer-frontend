import React from 'react'
import { Row, Col, Container, Carousel } from 'react-bootstrap'
import styles from '../../styles/HomePage.module.css'
import SlideShow from './SlideShow'


function HomePage() {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className={styles.HeroImage}> </Col>
                <h1 className={styles.HeroText}> Social Reviewer, the review site for all reviews!</h1>
            </Row>
            <h2> Check out our Most popular posts</h2>
            <hr/>
            <SlideShow/>
        </Container>
        

        
    )
}

export default HomePage