import React, {
  useEffect,
  useState
} from 'react';
import {
  axiosReq
} from '../../api/axios';
import styles from '../../styles/CreateReview.module.css';
import ReviewPage from './ReviewPage';

function SortByPrice() {
  const [sortReview, setSortReview] = useState({
    sortedReviews: {
      results: []
    }
  });
  const {
    sortedReviews
  } = sortReview;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const {
          data
        } = await axiosReq.get("posts/?ordering=-price");
        setSortReview((prevState) => ({
          ...prevState,
          sortedReviews: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);


  return (

    <div>
      <p className={styles.SortText}> Reviews are sorted now by price from highest to lowest </p>
      {sortedReviews.results.map((sort) => { return <ReviewPage key={sort.id} {...sort} /> })}
    </div>
  )

}

export default SortByPrice