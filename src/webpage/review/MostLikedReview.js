import React, {
  useEffect,
  useState
} from 'react';
import {
  Container
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import {
  axiosReq
} from '../../api/axios';
import styles from '../../styles/MostLikedReview.module.css';
/** Showing the 3 most liked reviews the array will always show only the 3 highest with the 
 * help of the slice funciton.
*/
const MostLikedReview = () => {
    const [likedReview, setLikedReview] = useState({
      mostLiked: {
        results: []
      }
    });
    const {
      mostLiked
    } = likedReview;

    useEffect(() => {
      let isMounted = true;
      const handleMount = async () => {
        try {
          const {
            data
          } = await axiosReq.get("posts/?ordering=-like_counter");
          if (isMounted){
          setLikedReview((prevState) => ({
            ...prevState,
            mostLiked: data,
          }));
        }
        } catch (err) {
          console.log(err);
        }
      };

      handleMount();
      return () => {
        isMounted = false;
      };
    }, []);

  return (
    
    <div>
      <Container>
        {mostLiked.results.slice(0, 3).map(reviews =>
          <div key={reviews.id}>
            <div className={`${styles.HeroImage}`}>
              <p className={styles.PopularDescribeText}> <i className="fa-regular fa-user"> {reviews.owner} </i>  </p> <i className="fa-solid fa-thumbs-up"> {reviews.like_counter} </i>
              <Link to={`/reviews/${reviews.id}`}>
                <img src={reviews.image} className={styles.PopularImage} alt={reviews.content} />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>

  )
}

export default MostLikedReview