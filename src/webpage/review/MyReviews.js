import React, { useEffect, useState,} from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import { axiosReq } from '../../api/axios'
import MyReviewsPage from './MyReviewsPage';
import {useCurrentUser} from '../../context/CurrentUserContext';
import SpinnerAsset from '../../components/SpinnerAsset';

function MyReviews() {
    const {pathname}= useLocation()
    const currentuser= useCurrentUser()
    const id = currentuser?.profile_id
    const [loaded, loadedcomplete] = useState(false)
    const [Myreview, setMyReview] = useState({ results: [] });

    useEffect(() => {
        const handleData = async () => {
          try {
            const { data } = await axiosReq.get(`/posts/?owner__profile=${id}`);
            setMyReview(data)
            loadedcomplete(true)
          }
          catch (err) {
            console.log(err)
    
          }
    
        }
        loadedcomplete(false)
        
        const time = setTimeout(() => {
          handleData()
    
    
        }, 1000)
    
    
        return () => {
          clearTimeout(time)
        }
    
      }, [id,pathname])
      

return (
    

     <div>{loaded ? (<> {Myreview.results.map((review)=>{ return  <MyReviewsPage key={review.id} {...review}/>})} </>) : (<SpinnerAsset/>)} </div>
    
    
    
  )
}

export default MyReviews