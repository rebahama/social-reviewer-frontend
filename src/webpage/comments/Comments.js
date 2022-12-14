import React, {
  useState
} from 'react';
import styles from '../../styles/Comments.module.css';
import {
  useCurrentUser
} from '../../context/CurrentUserContext';
import {
  Button,
  Container,
  Modal
} from 'react-bootstrap';
import {
  useHistory
} from 'react-router-dom/cjs/react-router-dom.min';
import {
  axiosRes
} from '../../api/axios';

const Comments = (props) => {
    const history = useHistory();
    const {
      profile_image,
      content,
      owner,
      created_at,
      id,
      setPost,
      setComments,
    } = props;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleCommentDelete = async () => {

      try {
        await axiosRes.delete(`comments/${id}`);
        history.go(0);
        alert("Your comment have been deleted");
      } catch (err) {

      }
      setPost((prevPost) => ({
        results: [{
          ...prevPost.results[0],
          comments_count: prevPost.results[0].comments_count - 1,
        }, ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const realowner = (<> <Button variant="primary" type="submit" className={`$offset-md-3 ${styles.DeleteBtn}`} onClick={handleShow}> Delete </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Deleting review!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Warning you are about to delete this comment </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" type="submit" onClick={handleCommentDelete}> Delete </Button>

      </Modal.Footer>
    </Modal>
  </>);

  return (

    <Container>
      <div className={styles.CommentContainer}>
        <img src={profile_image} className={styles.CommentAvatar} alt={owner} />
        <p className={styles.UserNameStyles}> Username: {owner}</p>
      </div>
      <div className={` offset-3 ${styles.ContentStyles}`}>
        <p> {content} </p>
      </div>
      <span> {created_at} </span>
      <div className={styles.DeleteBtnContainer}>
      {is_owner && realowner}
      </div>
      <hr />
    </Container>
  )
};

export default Comments