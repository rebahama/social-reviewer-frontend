import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRes } from '../../api/axios'


const Comments = (props) => {
const history = useHistory();
const {profile_id, content, rating, owner, post, id, setPost, setComments, is_owner} = props

const handleCommentDelete = async ()=>{

  try{
      await axiosRes.delete(`comments/${id}`)
      history.go(0)
  }
  catch(err)
  {
      console.log(err)
  }
setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
}
const realowner= <> <Button variant="primary" type="submit" onClick={handleCommentDelete}> Delete </Button></>
return (
    <div>
       <p> profile id : {profile_id} </p> 
        <p> Owner: {owner}</p>
        <p> Content: {content}</p>
        <p> Post number id: {post}</p>
        <p> Rating: {rating}</p>
        {is_owner && realowner}
        <hr/>
    </div>
  )
}

export default Comments