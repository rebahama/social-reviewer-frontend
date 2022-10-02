import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import styles from '../../styles/HomePage.module.css'
import CategoryPage from '../category/CategoryPage'


function HomePage() {



    return (
        <Container fluid>
            <Row>
                <Col md={12} className={styles.HeroImage}> </Col>
                <h1 className={styles.HeroText}> Social Reviewer, the review site for all reviews!</h1>
            </Row>
            <hr/>
            <h2 className={styles.PresentationText}> Welcome to social reviewer, Are you tired to compare and search after diffrent reviews on many diffrent pages. Not anymore now you can find reviews about everything from cars to electronics, on the same page. Create an account to get started or checkout our reviews</h2>
            <CategoryPage/>
        </Container>
        
    )
}

export default HomePage