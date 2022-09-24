import React from 'react'

const Comments = (props) => {

const {profile_id, content, rating, owner,post } = props
  return (
    <div>
      
       <p> profile id : {profile_id} </p> 
        <p> Owner: {owner}</p>
        <p> Content: {content}</p>
        <p> Post number id: {post}</p>
        <p> Rating: {rating}</p>
        <hr/>
     

    </div>
  )
}

export default Comments