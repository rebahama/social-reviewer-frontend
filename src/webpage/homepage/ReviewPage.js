import React from 'react'
import styles from '../../styles/ReviewPage.module.css'
import { Row, Col, Container } from 'react-bootstrap'

const ReviewPage = (props) => {

   const {
      category_name,
      content,
      created_at,
      id,
      image,
      is_owner,
      title,
      price,
      owner,
      comment_counter,
      like_counter,
      update_at,




   } = props


   return (
      <div className={styles.ReviewContainer}>
         <Container >
            <h3 className={styles.ReviewText}> {title}</h3>
            <hr />
            <div className={styles.AllContent}>
               <Row md={12}>

                  <img src={image} className={styles.ReviewImage}></img>

                  <Col md={6} className={styles.ExtraFields}>
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-thumbs-up"></i> Pros</h3>
                     <p> With so many different options at different price points, picking out the best iPhone can be tricky. </p>
                     
                     <h3 className={styles.HeadingFields}> <i className="fa-sharp fa-solid fa-thumbs-down"></i> Cons</h3>
                     <p> With so many different options at different price points, picking out the best iPhone can be tricky. </p>
                     
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-euro-sign"></i> Price </h3>
                     <p>{price} </p>
                     
                     <h3 className={styles.HeadingFields}> <i className="fa-solid fa-table-columns"></i> Category </h3>
                     <p>{category_name}</p>


                  </Col>
                  <Col md={6}>
                     <h3> Describtion </h3>
                     <p> {content}</p>
                  </Col>
               </Row>

            </div>
         </Container>




      </div>
   )
}

export default ReviewPage