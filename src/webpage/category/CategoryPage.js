import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios'
import SpinnerAsset from '../../components/SpinnerAsset';

const CategoryPage = () => {
 
  const [loaded, loadedcomplete] = useState(false)
  const [category, setCategory] = useState({ results: [] })
  useEffect(() => {

    const handleData = async () => {

      try {
        const { data } = await axiosReq.get("category/")
        setCategory(data)
        loadedcomplete(true)
        console.log(data)

      }
      catch (err) {

      }

    };
    loadedcomplete(false)
    const time = setTimeout(() => {
      handleData()


    }, 1500)


    return () => {
      clearTimeout(time)
    }

  }, [])


  return (
    <div>

{loaded ? (<> {category.results.map(category =>
  ( <Link to={`category/${category.id}`} key={category.id} > <h3> {category.title} </h3> </Link>))} </>)
  : (<SpinnerAsset />)}
      
     
    </div>
  )
}

export default CategoryPage