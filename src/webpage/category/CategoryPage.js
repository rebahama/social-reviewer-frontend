import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios'

const CategoryPage = () => {
 
    const [category, setCategory] = useState({results:[]})
useEffect(()=>{

    const handleData = async ()=>{
        
        try{
            const {data} = await axiosReq.get("category/")
            setCategory(data)
            console.log(data)

        }
        catch(err){

        }

    };
    const time = setTimeout(() => {
        handleData()
  
  
      }, 1500)
  
  
      return () => {
        clearTimeout(time)
      }

}, [])

  
 return (
    <div>categoryPage
{category.results.map(category=>
        <Link to={`category/${category.id}`}>
        <h3 key={category.id}> {category.title} {category.id}</h3>
        </Link>
        
        )}
        
    </div>
  )
}

export default CategoryPage