import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';
import SpinnerAsset from '../../components/SpinnerAsset'

const AllReviews = (props) => {

  const {
    
    owner
  



 } = props
  const [review, setReview] = useState({results: []});

  useEffect(()=>{
    const handleData = async () =>{
        try{
          const { data } = await axiosReq.get("/posts/");
        setReview(data)
        console.log(review)
        }
        catch(err){
            console.log(err)

        }

    }
    handleData()

}, [])

  
  
  return (
    <div>
<SpinnerAsset/>
{review.results.map((review) => (
                  <ReviewPage key={review.id} {...review}/>
                  
                ))}
                
    </div>
  )
}

export default AllReviews