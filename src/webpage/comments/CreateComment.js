import React, { useState } from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap'
import { axiosRes } from '../../api/axios'

function CreateComment(props) {
const [error, setError] = useState({});
 
const { post, setPost, setComments, rating } = props;
const [content, setContent] = useState("");


const handleComment = (event) => {
    setContent(event.target.value);


    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        rating,
        post,
      });
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
               
                

                
              </Form.Group>
              <Button variant="primary" type="submit">
    Submit
  </Button>


    </Form>
    </Container>
  )
}

export default CreateComment