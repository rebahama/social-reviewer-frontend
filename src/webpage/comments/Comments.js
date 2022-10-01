import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRes } from '../../api/axios'


const Comments = (props) => {
const history = useHistory();
const {profile_id, content, rating, owner, post, id, setPost, setComments, is_owner} = props

const handleCommentDelete = async ()=>{

  try{
      await axiosRes.delete(`comments/${id}`)
      history.go(0)
      alert("Your comment have been deleted")
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

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const realowner= <> <Button variant="primary" type="submit" onClick={handleShow}> Delete </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Deleting review!</Modal.Title>
         </Modal.Header>
         <Modal.Body>Warning you are about to delete this comment </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
            <Button variant="danger" type="submit" onClick={handleCommentDelete}> Delete </Button>

         </Modal.Footer>
      </Modal>



</>


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