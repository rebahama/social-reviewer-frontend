import React from 'react'

const ReviewPage = (props) => {
  
 const {
    category_name,
    content,
    created_at,
    id,
    image,
    is_owner,
    title,
    price,
    owner,
    comment_counter,
    like_counter,
    update_at,




 } = props
  
  
 return (
    <div>
        {title}
        {comment_counter}
        {price}




    </div>
  )
}

export default ReviewPage