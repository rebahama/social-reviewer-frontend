import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';
import styles from '../../styles/ReviewPage.module.css'
import SpinnerAsset from '../../components/SpinnerAsset'
import { Col, Container, Form, Row } from 'react-bootstrap';

const AllReviews = (props) => {

  const { id } = props
  const [review, setReview] = useState({ results: [] });
  const [loaded, loadedcomplete] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?search=${query}`);
        setReview(data)
        loadedcomplete(true)

      }
      catch (err) {
        console.log(err)

      }

    }
    loadedcomplete(false)
    const time = setTimeout(() => {
      handleData()


    }, 1500)


    return () => {
      clearTimeout(time)
    }
  }, [id, query])



  return (
    <div>
      <Container>
        <Row md={12}>
          <Col>
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Control type="text" className={styles.SearchBar} placeholder="Search a review" value={query} onChange={(event) => setQuery(event.target.value)} />
            </Form>
          </Col>
        </Row>
      </Container>
      {loaded ? (<> {review.results.map((review) => (<ReviewPage key={review.id} {...review} />))} </>) : (<SpinnerAsset />)}
    </div>
  )
}

export default AllReviews