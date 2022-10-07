import React, { useEffect, useState } from 'react';
import styles from '../../styles/CategoryPage.module.css';
import reviewGif from '../../assets/review-rating.gif';
import commentGif from '../../assets/comment.gif';
import signupGif from '../../assets/sign-up.gif';
import { Carousel, Container, } from 'react-bootstrap';
import logo from '../../assets/Logo-social-reviewer.png'
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios';
import SpinnerAsset from '../../components/SpinnerAsset';
import MostLikedReview from '../review/MostLikedReview';
import MostCommentedReview from '../review/MostCommentedReview';

const CategoryPage = () => {
/** Function for category, when the category is not loaded display a spinner until the get request
 * is completed.
 */
  const [loaded, loadedcomplete] = useState(false);
  const [category, setCategory] = useState({ results: [] });

  useEffect(() => {

    const handleData = async () => {

      try {
        const { data } = await axiosReq.get("category/")
        setCategory(data)
        loadedcomplete(true)
        console.log(data)

      }
      catch (err) {

      }

    };
    loadedcomplete(false)
    const time = setTimeout(() => {
      handleData()


    }, 1500)


    return () => {
      clearTimeout(time)
    }

  }, []);

  return (

    <div>
      <Container>
        <Carousel>
          <Carousel.Item className={styles.ContainerCarousel}>
            <img
              className="d-block w-100"
              src={logo}
              alt="First slide"
            />
            <Carousel.Caption>
              {loaded ? (<> {category.results.map(category =>

                (<Link to={`category/${category.id}`} key={category.id} className={styles.CategoryChoiches} > <h3 className={styles.CategoryLinks}> {category.title} </h3> </Link>))} </>)
                : (<SpinnerAsset />)}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.ContainerCarousel}>
            <h4 className={styles.PopularText}> Top 3 most liked reviews </h4>
            <img
              className="d-block w-50"
              src={reviewGif}
              alt="First slide"
            />
            <Carousel.Caption className={styles.ContainerCarouselSecond}>
              <MostLikedReview />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.ContainerCarouselThird}>
            <h3 className={styles.PopularText}> Most Commented Reviews </h3>
            <img
              className="d-block w-50"
              src={commentGif}
              alt="First slide"
            />
            <Carousel.Caption>
              <MostCommentedReview />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.ContainerCarouselFourth}>
            <h3 className={styles.PopularText}> Checkout the reviews</h3>
            <img
              className="d-block w-50"
              src={signupGif}
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/reviews" className={styles.BtnCarouselFourth}> All reviews</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
    
  )
}

export default CategoryPage