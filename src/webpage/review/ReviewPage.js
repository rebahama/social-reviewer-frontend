import React from 'react'
import styles from '../../styles/ReviewPage.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import { axiosRes } from '../../api/axios'
import { Link, useHistory } from 'react-router-dom'
import Comments from '../comments/Comments'

const ReviewPage = (props) => {

   const {
      category_name,
      content,
      created_at,
      id,
      image,
      is_owner,
      title,
      like_id,
      price,
      owner,
      pros,
      cons,
      comment_counter,
      like_counter,
      update_at,
      setReview,
      comments



   } = props
const history = useHistory();
const handleLikes = async ()=> {
   try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setReview((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

const handleUnlike = async () => {
   try {
     await axiosRes.delete(`/likes/${like_id}/`);
     setReview((prevPosts) => ({
       ...prevPosts,
       results: prevPosts.results.map((post) => {
         
        return post.id === id
           ? { ...post, likes_count: post.likes_count - 1, like_id: null }
           : post;
       }),
     }));
   } catch (err) {
     console.log(err);
   }
 };

 const handleDelete = async () => {
   try {
     await axiosRes.delete(`/posts/${id}/`);
     history.goBack();
   
   } catch (err) {
     console.log(err);
   }
 };

const realOwner = <> <Link to={`/reviews/${id}/edit`}> <h3 className={styles.ReviewText}> Edit</h3></Link>

<Link onClick={handleDelete} to={`/reviews/${id}`}>
<h3 className={styles.ReviewText}> Delete </h3></Link> </>
   

return (
      <div className={styles.ReviewContainer}>
         <Container >
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
                     <Link onClick={handleDelete} to={`/reviews/${id}`}>
                     <p>{category_name}</p>
                     </Link>
                     {is_owner && realOwner} 


                  </Col>
                  <Col md={6}>
                     <h3> Description </h3>
                     <p className={styles.ContentText}> {content} </p>
                     <i className={`fa-solid fa-thumbs-up ${styles.LikeThumb}`} onClick={handleLikes}></i>
                     
                      {like_counter}
                      <i className={`fa-solid fa-thumbs-down ${styles.LikeThumb}`} onClick={handleUnlike}></i>
                      
                      
                      <i className="fa-regular fa-comment-dots">{comment_counter}</i>
                     <p className={styles.CreateDateText}>Created {created_at} ago by user : {owner}</p> 
                  </Col>
               </Row>

            </div>
         </Container>
      </div>
   )
}

export default ReviewPage