import React from 'react'
import styles from '../../styles/MyReviewsPage.module.css'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyReviewsPage = (props) => {
  const { id, title, image,is_owner } = props
  const realOwner = <Link to={`/reviews/${id}/edit`}> Edit </Link>
  return (
    <div>
      <Container>
        <Row>
        <Col md={6} className={`offset-3`}>
        
          <Card md={12} sm={6}>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>
              {is_owner&&realOwner}
              </Card.Text>
              

              <Link to={`/reviews/${id}`}> View </Link>
            </Card.Body>
            
          </Card>
        
        
        
        </Col>
        <hr/>
        </Row>


      </Container>

    </div>
  )
}

export default MyReviewsPage