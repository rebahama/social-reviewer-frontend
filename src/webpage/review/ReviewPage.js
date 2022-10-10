import React, {
   useState
 } from 'react';
 import {
   useCurrentUser
 } from '../../context/CurrentUserContext';
 import styles from '../../styles/ReviewPage.module.css';
 import {
   Row,
   Col,
   Container,
   Modal,
   Button,
   Alert
 } from 'react-bootstrap';
 import {
   axiosRes
 } from '../../api/axios';
 import {
   Link,
   useHistory
 } from 'react-router-dom';
 
 const ReviewPage = (props) => {
     /**Takes diffret props that comes from the API and destrucures so that you can use the props throughout the function */
 
     const {
       category_name,
       content,
       created_at,
       id,
       image,
       title,
       likes_id,
       price,
       owner,
       pros,
       cons,
       comment_counter,
       like_counter,
       setReview,
     } = props;
     /*currentUser variables makes it possible to know that a user is logged in*/
     const currentUser = useCurrentUser();
     const is_owner = currentUser?.username === owner;
     /*For displaying modal*/
     const [show, setShow] = useState(false);
     /*Displaying message*/
     const [message, setMessage] = useState("");
     /*For modal*/
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     /*Page redirection*/
     const history = useHistory();
 
     const handleLikes = async () => {
       try {
         const {
           data
         } = await axiosRes.post("/likes/", {
           post: id
         });
         setReview((prevPosts) => ({
           ...prevPosts,
           results: prevPosts.results.map((post) => {
             return post.id === id ?
               {
                 ...post,
                 like_counter: post.likes_count + 1,
                 likes_id: data.id
               } :
               post;
           }),
         }));
       } catch (err) {
 
       }
     };
 
     const handleUnlike = async () => {
       try {
         await axiosRes.delete(`/likes/${likes_id}`);
         setReview((prevPosts) => ({
           ...prevPosts,
           results: prevPosts.results.map((post) => {
             return post.id === id ?
               {
                 ...post,
                 like_counter: post.like_counter - 1,
                 likes_id: null
               } :
               post;
           }),
         }));
 
       } catch (err) {
       }
     };
 
     const handleDelete = async () => {
       try {
         await axiosRes.delete(`/posts/${id}/`);
         history.goBack();
         setMessage("Your review have deleted");
         alert("Your review have been successfully deleted");
       } catch (err) {
       }
     };

   /*Show only when the user is the owner of the review*/
   const realOwner = (<> <Link to={`/reviews/${id}/edit`}><i className={`fa-regular fa-pen-to-square ${styles.TrashCan}`}> </i>  </Link>

      <i className={`fa-solid fa-trash ${styles.TrashCan}`} onClick={handleShow}> </i>
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Deleting review!</Modal.Title>
         </Modal.Header>
         <Modal.Body>Warning you are about to delete this review </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
            <Link onClick={handleDelete} to={`/reviews/${id}`}>
               <Button variant="danger"> Delete</Button> </Link>
         </Modal.Footer>
      </Modal>
   </>);

/*Display if user is logged in*/
   const likedLoggedIn = (<> {likes_id ? <i className={`fa-solid fa-thumbs-down ${styles.LikeThumb}`} onClick={handleUnlike}> {like_counter} </i>  :
      <i className={`fa-solid fa-thumbs-up ${styles.LikeThumb}`} onClick={handleLikes}> {like_counter}</i>} </>)

   return (

      <div>
         <Container>
            <Alert variant="success" id="Displaying" className={styles.DisplayHide}>
               <p>{message}</p>
            </Alert>
            <Link to={`/reviews/${id}`}>
               <h3 className={styles.ReviewText}> {title}</h3>
            </Link>
            <hr />
            <div className={styles.AllContent}>
               <Row md={12}>
                  <img src={image} className={styles.ReviewImage} alt={title}></img>
                  <Col md={6} className={styles.ExtraFields}>
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-thumbs-up"></i> Pros</h3>
                     <p> {pros} </p>
                     <h3 className={styles.HeadingFields}> <i className="fa-sharp fa-solid fa-thumbs-down"></i> Cons</h3>
                     <p> {cons} </p>
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-euro-sign"></i> Price </h3>
                     <p>{price} </p>
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-table-columns"></i> Category </h3>
                     <p>{category_name}</p>
                     {is_owner && realOwner}
                  </Col>
                  <Col md={6}>
                     <h3 className={styles.ExtraFields }> Description </h3>
                     <p className={styles.ContentText}> {content} </p>
                     <p className={styles.CreateDateText}>Created {created_at} ago by user : {owner}</p>
                     
                     <div className={styles.LikeCommentContainer}>
                        {currentUser ? likedLoggedIn : <> <p> <Link to="/signin"> Log in </Link>to like this</p></>}
                        <Link to={`/reviews/${id}`}> <i className="fa-regular fa-comment-dots"> {comment_counter} </i></Link>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   )
}

export default ReviewPage