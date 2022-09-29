import React, { useEffect, useState,} from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import { axiosReq } from '../../api/axios'
import MyReviewsPage from './MyReviewsPage';
import {useCurrentUser} from '../../context/CurrentUserContext';

function MyReviews() {
    const {pathname}= useLocation()
    const currentuser= useCurrentUser()
    const id = currentuser?.profile_id
    const [Myreview, setMyReview] = useState({ results: [] });

    useEffect(() => {
        const handleData = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?owner__profile=${id}`);
            setMyReview(data)
            console.log(Myreview)
          }
          catch (err) {
            console.log(err)
    
          }
    
        }
        handleData()
    
      }, [pathname])


return (
    

     <div>{Myreview.results.map((review)=>{

      return  <MyReviewsPage key={review.id} {...review}/>

     })}</div>
    
    
    
  )
}

export default MyReviews