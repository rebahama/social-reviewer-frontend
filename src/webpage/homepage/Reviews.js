import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios';

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
    <div> <h1> this is review page </h1></div>
  )
}

export default Reviews