import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';
import SpinnerAsset from '../../components/SpinnerAsset'
import { Form } from 'react-bootstrap';

const AllReviews = (props) => {

  const {id} = props
  const [review, setReview] = useState({ results: [] });
  const [loaded, loadedcomplete] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?search=${query}`);
        setReview(data)
        loadedcomplete(true)
        console.log(review)
      }
      catch (err) {
        console.log(err)

      }

    }
    loadedcomplete(false)
    const time = setTimeout(()=>{
      handleData()


    }, 1500)
   
return ()=>{
  clearTimeout(time)
}
  }, [id,query])



  return (
    <div>
      <Form onSubmit={(event)=> event.preventDefault()}>
    <Form.Control type="text" placeholder="Search a review" value={query} onChange={(event)=> setQuery(event.target.value)}/> 


      </Form>
      {loaded ?
        (<>{review.results.map((review) => (<ReviewPage key={review.id} {...review} />))} </>) : (<SpinnerAsset />) }
    </div>
  )
}

export default AllReviews