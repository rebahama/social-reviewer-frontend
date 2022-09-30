
import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios'

const MostLikedReview = () => {
  const [likedReview, setLikedReview] = useState({mostLiked:{results :[]}})
  const {mostLiked}=likedReview

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
    <div>{mostLiked.results.map(reviews=>
        <p key={reviews.id}> {reviews.owner}</p>
        
        )} </div>
  )
}

export default MostLikedReview