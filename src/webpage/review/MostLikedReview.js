import React, { useEffect, useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { axiosReq } from '../../api/axios'
import styles from '../../styles/MostLikedReview.module.css'

const MostLikedReview = () => {
  const [likedReview, setLikedReview] = useState({ mostLiked: { results: [] } })
  const { mostLiked } = likedReview

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("posts/?ordering=-like_counter");
        setLikedReview((prevState) => ({
          ...prevState,
          mostLiked: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);





  return (
    <div>
      <Container>
        
        {mostLiked.results.map(reviews =>
          <div key={reviews.id}> 
              <div className={`${styles.HeroImage}`}>
              <p className={styles.PopularDescribeText}> <i className="fa-regular fa-user"> {reviews.owner} </i>  </p> <i className="fa-solid fa-thumbs-up"> {reviews.like_counter} </i>  
              <Link to={`/reviews/${reviews.id}`}>
              <img src={reviews.image} className={styles.PopularImage}/>
              </Link>
              </div>
              
          </div>
          

        )}
      </Container>
    </div>

  )
}

export default MostLikedReview