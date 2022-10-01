import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios'
import SpinnerAsset from '../../components/SpinnerAsset'
import ReviewPage from '../review/ReviewPage'

function CategoryPageShow(props) {
  const {title}=props
  const [loaded, loadedcomplete] = useState(false)
  const [category, setCategory] = useState({ results: [] })
  
  const { id } = useParams()
  useEffect(() => {

    const handleData = async () => {

      try {
        const { data } = await axiosReq.get(`/posts/?owner__profile=&category=${id}`)
        setCategory(data)
        console.log(data)
        loadedcomplete(true)

      }
      catch (err) {
        console.log(err)
      }



    }
    loadedcomplete(false)
    const time = setTimeout(() => {
      handleData()


    }, 1500)

    return () => {
      clearTimeout(time)
    }

  }, [id])


  return (
    <div> {category.title}
      {loaded ? (<> {category.results.map((review) => (<ReviewPage key={review.id} {...review} />))} </>) : (<SpinnerAsset />)}
      


    </div>
  )
}

export default CategoryPageShow