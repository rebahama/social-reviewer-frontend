import React from 'react'

const Comments = (props) => {

const {profile_id, rating, content, owner } = props
  return (
    <div>
      
        {profile_id}
        {owner}
        {content}
        {rating}

    </div>
  )
}

export default Comments