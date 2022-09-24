import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios';
import ReviewPage from '../review/ReviewPage';
import Comments from '../comments/Comments';

function Reviews () {

    const {id} = useParams();
    const [review, setReview] = useState({results: []});
    const [comments, setComment] = useState({results: []});
    
    useEffect(()=>{
        const handleData = async () =>{
            try{
                const [{data: review}, {data: comments}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    axiosReq.get(`/comments/?post=${id}`),
                    
                ])
                setReview({results: [review]})
                setComment(comments)
                console.log(comments)
            }
            catch(err){
                console.log(err)

            }

        }
        handleData()

    }, [id])




  return (
    
    <div>
    
    
    
    <ReviewPage {...review.results[0]} setReview={setReview} Reviews/>
    
    {comments.results.map((comments)=> {

    
    return <Comments key={comments.id} {...comments}/>
   
    })}
    

 

    
    </div>


  )
}

export default Reviews