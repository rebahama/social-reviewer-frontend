import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axios'

function CategoryPageShow() {
  const [category, setCategory] = useState({results: []})
  const {id} = useParams()
  useEffect(()=>{

const handleData = async()=>{

    try {
        const {data} = await axiosReq.get(`/posts/?owner__profile=&category=${id}`)
            setCategory(data)
            console.log(data)

    }
    catch(err){
        console.log(err)
    }



}
const time = setTimeout(() => {
  handleData()


}, 1500)

return () => {
  clearTimeout(time)
}

  }, [])

  
    return (
    <div>CategoryPageShow
{category.results.map(post=>
       
        <p key={post.id}> {post.title} {post.id}</p>
    
        )}


    </div>
  )
}

export default CategoryPageShow