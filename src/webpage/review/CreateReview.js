import React, { useRef } from 'react'
import { useState } from 'react';
import { Alert, Button, Container, Form, Col, Row } from 'react-bootstrap';
import { axiosReq } from '../../api/axios';

function CreateReview() {
  const [createReview, setCreateReview] = useState({
    title:"",
    content:"",
    image:"",
    price:"",
    category:"",
  })  
  const imageInput= useRef(null)
  const{title, content, image, price, category} = createReview
  const [error, setError] = useState({});

  const handleReview = (event) => {
    setCreateReview({
      ...createReview,
      [event.target.name]: event.target.value,
    });

  }

  const handleImage =(event) =>{
    URL.revokeObjectURL(image);
    if (event.target.files.length){
      setCreateReview({
        ...createReview,
        import: URL.createObjectURL(event.target.files[0])

      })

    }

  }
  const handleSubmit = async (event) =>{
    event.preventDefault()
    const formData = new FormData();
    formData.append('title', title)
    formData.append('content', content)
    formData.append('image', imageInput.current.files[0])
    formData.append('price', price)
    formData.append('category', category)

    try{

      const {data} = await axiosReq.post('/posts/', formData)

    }
    catch(err){
      console.log(err)
    if (err.response?.data !== 401){
      setError(err.response?.data)

    }
    }

  }

  
  return (
   
   
   <Container>
    <Row md={4}>
      <Col md={6}>

   <Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Label> Title </Form.Label>
    <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={handleReview} />
  </Form.Group>

  <Form.Group>
<Form.Label> Body content </Form.Label>
<Form.Control as="textarea" name="content" value={content} onChange={handleReview}></Form.Control>
  </Form.Group>

<Form.Label> Image upload </Form.Label>
<Form.File id="image-upload" onchange={handleImage} ref={imageInput} accept="image/*"/>


  <Form.Group>
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Enter price" name="price" value={price} onChange={handleReview}  min="0" max="1000000"/>
  </Form.Group> 

  <Form.Group>
    <Form.Label>Category</Form.Label>
    <Form.Control as="select" name="category" value={category} onChange={handleReview}>
      <option>Clothes</option>
      <option>Electronics </option>
      <option>Vehicles</option>
      <option>Sports</option>
      <option>Games</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>



  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
</Row>
</Container>



  )
}

export default CreateReview