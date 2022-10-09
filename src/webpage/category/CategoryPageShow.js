import React, {
  useEffect,
  useState
} from 'react';
import styles from '../../styles/Comments.module.css';
import {
  useParams
} from 'react-router-dom/cjs/react-router-dom.min';
import {
  axiosReq
} from '../../api/axios';
import SpinnerAsset from '../../components/SpinnerAsset';
import ReviewPage from '../review/ReviewPage';

function CategoryPageShow() {
  /** Display the category page that is relevant to the id that is clicked
   * when category page is clicked use the reveiwpage component to put the results
   * inside that component for rendering the reviews.
   */
  const [loaded, loadedcomplete] = useState(false);
  const [category, setCategory] = useState({
    results: []
  });
  const {
    id
  } = useParams();

  useEffect(() => {

    const handleData = async () => {

      try {
        const {
          data
        } = await axiosReq.get(`/posts/?owner__profile=&category=${id}`);
        setCategory(data);
        console.log(data);
        loadedcomplete(true);

      } catch (err) {
        console.log(err);
      }

    };
    loadedcomplete(false);
    const time = setTimeout(() => {
      handleData();

    }, 1500);

    return () => {
      clearTimeout(time);
    };

  }, [id]);

  return (

    <div> <h3> category </h3>
      {loaded ? (<>
        {category.results.map((review) => (<ReviewPage  key={review.id} {...review} />))} </>) : (<SpinnerAsset />)}
        {category.results.length ? "":<p className={styles.UserNameStyles }> No reviews have been created yet for this categorypage... </p>}
    </div>
  )
  
};

export default CategoryPageShow