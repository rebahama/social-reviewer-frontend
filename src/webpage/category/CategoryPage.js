import React, {
  useEffect,
  useState
} from 'react';
import styles from '../../styles/CategoryPage.module.css';
import reviewGif from '../../assets/review-rating.gif';
import commentGif from '../../assets/comment.gif';
import signupGif from '../../assets/sign-up.gif';
import {
  Carousel,
  Container,
  Row
} from 'react-bootstrap';
import logo from '../../assets/homepage-anim.gif';
import {
  Link
} from 'react-router-dom';
import {
  axiosReq
} from '../../api/axios';
import SpinnerAsset from '../../components/SpinnerAsset';
import MostLikedReview from '../review/MostLikedReview';
import MostCommentedReview from '../review/MostCommentedReview';

const CategoryPage = () => {
    /** Function for category, when the category is not loaded display a spinner until the get request
     * is completed.
     */
    const [loaded, loadedcomplete] = useState(false);
    const [category, setCategory] = useState({
      results: []
    });

    useEffect(() => {

      const handleData = async () => {

        try {
          const {
            data
          } = await axiosReq.get("category/");
          setCategory(data);
          loadedcomplete(true);
          console.log(data);

        } catch (err) {

        }

      };
      loadedcomplete(false);
      const time = setTimeout(() => {
        handleData();

      }, 1500);

      return () => {
        clearTimeout(time);
      };

    }, []);

    const categoryShow = () => {
      const showCategory = document.getElementById("categoryShow");
    
      if (showCategory.style.display === "none") {
        showCategory.style.display = "block";
      } else {
        showCategory.style.display = "none";
      }
    
    };

  return (

    <div>
      <Container>
        <Carousel>
          <Carousel.Item className={styles.ContainerCarousel}>
            <h3 className={styles.PopularText}>  Top 3 most liked reviews </h3>

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
            <h3 className={styles.PopularText}> Top 3 most commented reviews </h3>
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
        <h3 className={styles.PopularText}> Check out all the categories</h3> <i onClick={categoryShow} className={`fa-solid fa-circle-arrow-down ${styles.CategorySymbols}`}></i>
        <Row>
          <div id="categoryShow" className={`${styles.ContainerCarousel} ${styles.CategoryContainer} `}>
            <h3 className={styles.CategoryText}> Categories</h3>
            {loaded ? (<> {category.results.map(category =>
              (<Link to={`category/${category.id}`} key={category.id} className={styles.CategoryChoiches} > <h3 className={styles.CategoryLinks}> {category.title} </h3> </Link>))} </>)
              : (<SpinnerAsset />)}
            <img className="d-block w-50" src={logo} alt="animation of two people holding stars" />
          </div>
        </Row>
      </Container>
    </div>

  )
};

export default CategoryPage