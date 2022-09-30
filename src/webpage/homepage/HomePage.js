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
           
            <CategoryPage/>
        </Container>
        
    )
}

export default HomePage