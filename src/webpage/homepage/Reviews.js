import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';

function Reviews () {

    const {id} = useParams();
    const [review, setReview] = useState({results: []});
    useEffect(()=>{
        const handleData = async () =>{
            try{
                const [{data: review}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ])
                setReview({results: [review]})
                console.log(review)
            }
            catch(err){
                console.log(err)

            }

        }
        handleData()

    }, [id])




  return (
    <div> <ReviewPage {...review.results[0]} setReview={setReview}/> </div>
  )
}

export default Reviews