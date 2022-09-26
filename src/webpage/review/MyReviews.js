import React, { useEffect, useState,} from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import { axiosReq } from '../../api/axios'
import MyReviewsPage from './MyReviewsPage';


function MyReviews(props) {
    const {pathname}= useLocation()
    const {id}=props
    const [Myreview, setMyReview] = useState({ results: [] });

    useEffect(() => {
        const handleData = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?owner__profile=${4}`);
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