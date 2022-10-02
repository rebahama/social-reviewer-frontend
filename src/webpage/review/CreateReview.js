import React, { useRef } from 'react'
import { useState } from 'react';
import { Alert, Button, Container, Form, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axios';
import styles from '../../styles/CreateReview.module.css'


function CreateReview() {
  const [createReview, setCreateReview] = useState({
    title: "",
    content: "",
    pros: "",
    cons: "",
    image: "",
    price: "",
    category: "",
  })
  const imageInput = useRef(null)
  const { title, content, image, price, category, pros, cons } = createReview
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");

  const [categorySub, setCategory] = useState({
    electronics: 1,
    clothes: 2,
    other: 3,
    vehicles: 4,
    sports: 5,
    games: 6,

  })
  const { electronics, clothes, other, vehicles, sports, games } = categorySub;
  const history = useHistory()

  const handleReview = (event) => {
    setCreateReview({
      ...createReview,
      [event.target.name]: event.target.value,
    });

  }

  const handleImage = (event) => {
    URL.revokeObjectURL(image);
    if (event.target.files.length) {
      setCreateReview({
        ...createReview,
        import: URL.createObjectURL(event.target.files[0])

      })

    }

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('title', title)
    formData.append('content', content)
    formData.append('pros', pros)
    formData.append('cons', cons)
    formData.append('image', imageInput.current.files[0])
    formData.append('price', price)
    formData.append('category', category)

    try {

      const { data } = await axiosReq.post('/posts/', formData)
      setMessage("Your review have been created")
      
      history.push(`/createreview`);
      <Link to={`/reviews/${data.id}`}>Check out your review </Link>
      

    }
    catch (err) {
      console.log(err)
      if (err.response?.data !== 401) {
        setError(err.response?.data)

      }
    }

  }


  return (


    <Container>
      <Row md={6}>
        <Col md={6} sm={6} className={`offset-3 ${styles.Container}`}>
          <h3 className={styles.CreateText}> Create a Review</h3>
          <div className={styles.Container}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label> Title </Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={title} onChange={handleReview} />
              </Form.Group>
              {error?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Form.Group>
                <Form.Label> Body content </Form.Label>
                <Form.Control as="textarea" name="content" value={content} onChange={handleReview}></Form.Control>
              </Form.Group>

              {error?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group>
                <Form.Label> Pros </Form.Label>
                <Form.Control as="textarea" name="pros" value={pros} onChange={handleReview}></Form.Control>
              </Form.Group>
              {error?.pros?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group>
                <Form.Label> Cons </Form.Label>
                <Form.Control as="textarea" name="cons" value={cons} onChange={handleReview}></Form.Control>
              </Form.Group>

              {error?.cons?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}



              <Form.Label> Image upload </Form.Label>
              <Form.File id="image-upload" onChange={handleImage} ref={imageInput} accept="image/*" />

              {error?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}


              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" name="price" value={price} onChange={handleReview} min="0" max="1000000" />
              </Form.Group>

              {error?.price?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}



              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" name="category" value={category} onChange={handleReview}>
                  <option className={styles.Hide}> </option>
                  <option value={electronics}>Electronics </option>
                  <option value={clothes}>Clothes</option>
                  <option value={vehicles}>Vehicles</option>
                  <option value={sports}>Sports</option>
                  <option value={games}>Games</option>
                  <option value={other}>Other</option>
                </Form.Control>
              </Form.Group>

              {error?.category?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                  
                </Alert>
              ))}

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Alert variant="success">
               <p>{message}</p>
                <Link to={`/reviews/`}>Check out your review here </Link>
              </Alert>
            </Form>
          </div>
        </Col>


      </Row>
    </Container>

  )
}

export default CreateReview