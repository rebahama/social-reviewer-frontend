import React from 'react';
import styles from '../../styles/MyReviewsPage.module.css';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyReviewsPage = (props) => {
  const { id, title, image,owner} = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner
  const realOwner = (<Link to={`/reviews/${id}/edit`} className={styles.EditandDeleteBtn}> Edit </Link>);


  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="offset-md-4">
            <Card md={12} lg={12} sm={12} className={styles.CardStyling}>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Text>
                  {is_owner && realOwner}
                </Card.Text>
                <hr/>
                <Link to={`/reviews/${id}`} className={styles.EditandDeleteBtn}> View </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr/>
    </div>

  )
}

export default MyReviewsPage