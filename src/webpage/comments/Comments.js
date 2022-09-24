import React from 'react'

const Comments = (props) => {

const {profile_id, content, owner,post } = props
  return (
    <div>
      
       <p> profile id : {profile_id} </p> 
        <p> Owner: {owner}</p>
        <p> Content: {content}</p>
        <p> Post number id: {post}</p>
     

    </div>
  )
}

export default Comments