import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';
import SpinnerAsset from '../../components/SpinnerAsset'

const AllReviews = (props) => {

  const {

    owner




  } = props
  const [review, setReview] = useState({ results: [] });
  const [loaded, loadedcomplete] = useState(false)

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get("/posts/");
        setReview(data)
        loadedcomplete(true)
        console.log(review)
      }
      catch (err) {
        console.log(err)

      }

    }
    loadedcomplete(false)
    handleData()

  }, [])



  return (
    <div>
      
      {loaded ?
        (<>{review.results.map((review) => (<ReviewPage key={review.id} {...review} />))} </>) : (<SpinnerAsset />) }
    </div>
  )
}

export default AllReviews