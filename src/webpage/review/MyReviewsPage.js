import React from 'react'

const MyReviewsPage = (props) => {
  const{id,owner,title}=props
  
    return (
    <div>
        {id}
        {owner}
        {title}
       

    </div>
  )
}

export default MyReviewsPage