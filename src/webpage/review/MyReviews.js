import React, {
  useEffect,
  useState,
} from 'react';
import styles from '../../styles/MyReviewsPage.module.css';
import {
  useLocation
} from 'react-router-dom/cjs/react-router-dom.min';
import {
  axiosReq
} from '../../api/axios';
import MyReviewsPage from './MyReviewsPage';
import {
  useCurrentUser
} from '../../context/CurrentUserContext';
import SpinnerAsset from '../../components/SpinnerAsset';

function MyReviews() {
  const {
    pathname
  } = useLocation();
  const currentuser = useCurrentUser();
  const id = currentuser?.profile_id;
  const [loaded, loadedcomplete] = useState(false);
  const [Myreview, setMyReview] = useState({
    results: []
  });

  useEffect(() => {
    let isMounted = true;

    const handleData = async () => {
      try {
        const {
          data
        } = await axiosReq.get(`/posts/?owner__profile=${id}`);
        if (isMounted) {
          setMyReview(data);
          loadedcomplete(true);
        }
      } catch (err) {

      }

    };
    loadedcomplete(false);
    handleData();
    return () => {
      isMounted = false;
    };

  }, [id, pathname]);

/** If the the results array is not loaded then dislay a spinner untill the loader is visable */
  return (
    
    <div> {loaded ? (<> <h3 className={styles.CreateText}> My reviews</h3>  {Myreview.results.map((review) =>
    { return  <MyReviewsPage key={review.id} {...review} /> })}  </>) : (<SpinnerAsset />) }
    {Myreview.results.length ? "" :"No reviews created yet..."}
    </div>

  )
  
}

export default MyReviews