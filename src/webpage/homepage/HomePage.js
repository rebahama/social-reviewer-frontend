import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import styles from '../../styles/HomePage.module.css'
import SlideShow from '../../components/SlideShow'
import MostLikedReview from '../review/MostLikedReview'


function HomePage() {
    return (
        <Container fluid>
            <Row>
                <Col md={12} className={styles.HeroImage}> </Col>
                <h1 className={styles.HeroText}> Social Reviewer, the review site for all reviews!</h1>
            </Row>
            <h2 className={styles.PopularText}>Most popular posts</h2>
            <MostLikedReview/>
            <hr/>
            <SlideShow/>    
        </Container>
        
    )
}

export default HomePage