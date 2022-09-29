import React from 'react'
import styles from '../../styles/MyReviewsPage.module.css'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyReviewsPage = (props) => {
  const { id, owner, title, content, image,is_owner } = props
  const realOwner = <Link to={`/reviews/${id}/edit`}> Edit </Link>
  return (
    <div>
      <Container>
        <Row md={6}>
        <Col md={6}  className={`offset-4 ${styles.Container}`}>
        
          <Card style={{ width: '20rem' }}>
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
        </Row>


      </Container>

    </div>
  )
}

export default MyReviewsPage