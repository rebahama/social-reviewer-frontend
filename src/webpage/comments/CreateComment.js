import React, { useState } from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { axiosRes } from '../../api/axios'

function CreateComment(props) {

const [error, setError] = useState({});
 
const { post, setPost, setComments} = props;
const [content, setContent] = useState("");
const history = useHistory()
const [ratingValue, setRating] = useState("")



const handleComment = (event) => {
    setContent(event.target.value);

  };
const handleRating = (event) =>{
  setRating(event.target.value)

}

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        ratingValue,
        post,
      });
      
      history.go(0)
      
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      
      setContent("");
      setRating("");
      
      
    } catch (err) {
     setError(err.response?.data)
    }
  };

return (
    <Container>
    <Form onSubmit={handleSubmit}>
         <Form.Group controlId="content">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="textarea" placeholder="Enter comment" value={content} onChange={handleComment} name="content" />
                
                {error?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>        
      ))}


<Form.Group controlId="rating">
    <Form.Label>Rating</Form.Label>
    <Form.Control as="select" name="rating" value={ratingValue} onChange={handleRating}>
      <option value={1}>{1}</option> 
      <option value={2}>2</option>
      <option value={2}>3</option>
      <option value={3}>4</option>
      <option value={4}>5</option>
      <option value={5}>6</option>
    </Form.Control>
  </Form.Group>
        
              </Form.Group>
              <Button variant="primary" type="submit">
    Submit
  </Button>


    </Form>
    </Container>
  )
}

export default CreateComment