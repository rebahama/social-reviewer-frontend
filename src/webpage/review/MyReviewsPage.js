import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'

const MyReviewsPage = (props) => {
  const { id, owner, title, content, image } = props

  return (
    <div>
      <Container>
        <Row md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>
                {content}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>




      </Container>

    </div>
  )
}

export default MyReviewsPage