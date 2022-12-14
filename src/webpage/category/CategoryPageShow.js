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
    let isMounted = true;
    const handleData = async () => {

      try {
        const {
          data
        } = await axiosReq.get(`/posts/?owner__profile=&category=${id}`);
        if (isMounted){
        setCategory(data);

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


  }, [id]);

  return (

    <div>
    {category.results.category_name}
      {category.results.slice(0,1).map((category)=>{
       
        return <h3 className={styles.CategoryHeading} key={category.id}>
        
        {category.category_name}</h3>
        

      })}
      <hr/>

      {loaded ? (<>
        {category.results.map((review) => (<ReviewPage  key={review.id} {...review} />))} </>) : (<SpinnerAsset />)}
        {category.results.length ? "":<p className={styles.UserNameStyles }> No reviews have been created yet for this categorypage... </p>}
    </div>
  )
  
};

export default CategoryPageShow