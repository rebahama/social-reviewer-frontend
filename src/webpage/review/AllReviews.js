import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axios';
import ReviewPage from './ReviewPage';
import styles from '../../styles/ReviewPage.module.css';
import SpinnerAsset from '../../components/SpinnerAsset';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import SortByPrice from './SortByPrice';

const AllReviews = (props) => {

  const [review, setReview] = useState({ results: [] });
  const [loaded, loadedcomplete] = useState(false);
  const [query, setQuery] = useState("");
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?search=${query}`);
        setReview(data);
        loadedcomplete(true);

      }
      catch (err) {
        console.log(err);

      }

    }
    loadedcomplete(false);

    const time = setInterval(() => {
      handleData();
    }, 1000)

    return () => {
      clearInterval(time);
    }

  }, [query]);

  const handleSort = () => {
    setClick(true);

  }

  const showSearch = (
    <Container>
      <Row md={12}>
        <Col>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control type="text" className={styles.SearchBar} placeholder="Search a review" value={query} onChange={(event) => setQuery(event.target.value)} />
          </Form>
        </Col>
      </Row>
    </Container>);

  return (
    /**If clicked is true then run the run component if it is false then show the search button. If loaded is true run the .map array else run the spinner component. */
    <div>

      {clicked ?
        (<SortByPrice />) :
        <> {showSearch}  <i   onClick={handleSort} className={`fa-solid fa-sort-up ${styles.SortBtn} ${styles.SortBtnPosition}`}> Sort by price</i> 
          {loaded ? (<>{review.results.map((review) => (<ReviewPage key={review.id} {...review} />))}</>) :
            <SpinnerAsset />}</>}
    </div>
  )
}

export default AllReviews