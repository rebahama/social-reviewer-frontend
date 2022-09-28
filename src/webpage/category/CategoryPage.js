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
handleData()


}, [])

  
 return (
    <div>categoryPage
{category.results.map(category=>
        <Link to={`category/${category.id}`}>
        <p key={category.id}> {category.title} {category.id}</p>
        </Link>
        )}
    </div>
  )
}

export default CategoryPage