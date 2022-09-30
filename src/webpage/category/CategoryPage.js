import React, { useEffect, useState } from 'react'
import styles from '../../styles/CategoryPage.module.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/Logo-social-reviewer.png'
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios'

import SpinnerAsset from '../../components/SpinnerAsset';
import MostLikedReview from '../review/MostLikedReview';

const CategoryPage = () => {

  const [loaded, loadedcomplete] = useState(false)
  const [category, setCategory] = useState({ results: [] })
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

  }, [])


  return (
    <div>
      <Container>
        <Carousel faded>

          <Carousel.Item>
          <h3 className={styles.CategoryHeading}>Categories</h3>
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


          <Carousel.Item>

            <img
              className="d-block w-100"
              src={logo}
              alt="First slide"
            />
            <Carousel.Caption>
            <MostLikedReview/>
            </Carousel.Caption>

          </Carousel.Item>

        </Carousel>
      </Container>


     


    </div>
  )
}

export default CategoryPage