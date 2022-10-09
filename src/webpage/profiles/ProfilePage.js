import React from 'react';
import {
  useCurrentUser
} from '../../context/CurrentUserContext';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import styles from '../../styles/ProfilePage.module.css';

const ProfilePage = (props) => {
    const {
      owner,
      review_counter,
      name,
      image,
      profile_like,
      id,
      content
    } = props;

const currentUser = useCurrentUser();
const is_owner = currentUser?.username === owner;
const realOwner = (<Link to={`/profiles/${id}`}><h3> Click here to edit profile</h3> </Link>);

  return (

    <Container>
      <Row>
        <Col md={12}>
          <div className={styles.Container}>
            <img src={image} className={styles.ProfileImage} alt={content} />
            <p> Username: {owner}</p>
            <p> Reviews created: {review_counter}</p>
            <p> Likes recived: {profile_like}</p>
            {name ? <>{name}</> : (<p> name not created yet....</p>)}
            <p> Bio: </p>
            {content ? <>{content}</> : (<p> Bio not created yet....</p>)}
            {is_owner && realOwner}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>

  )
}

export default ProfilePage