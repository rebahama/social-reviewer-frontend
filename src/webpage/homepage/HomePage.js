import React, {
    useEffect,
    useState
  } from 'react';
  import {
    Row,
    Col,
    Container,
    Alert
  } from 'react-bootstrap';
  import {
    useCurrentUser
  } from '../../context/CurrentUserContext';
  import Footer from '../../components/Footer';
  import styles from '../../styles/HomePage.module.css';
  import CategoryPage from '../category/CategoryPage';
  import {
    Link
  } from 'react-router-dom';
  
  function HomePage() {
    const [alertMessage, setAlertMessage] = useState(false);
    const currentUser = useCurrentUser();
  
    useEffect(() => {

      const DisplayName = () => {
    
        setAlertMessage(true);
        setTimeout(() => {
          setAlertMessage(true);
    
        });
    
      };
      DisplayName();
    
    }, []);
   
    return (
        <Container fluid>
            <Row>
                <Col md={12} className={styles.HeroImage}> </Col>
                <h1 className={styles.HeroText}> Social Reviewer, the review site for all reviews!</h1>
            </Row>
            <hr />
            {currentUser? alertMessage &&  <Alert variant="primary"> Welcome {currentUser?.username} <Link  className ={styles.LinkColorName} to="/createreview"> click here to start a review. </Link></Alert>:""}
            <h2 className={styles.PresentationText}> Welcome to social reviewer,
            Are you tired to compare and search after diffrent reviews on many diffrent pages.
            Not anymore now you can find reviews about everything from cars to electronics, on the same page.
            Create an account to get started or checkout our reviews </h2>
            <CategoryPage />
            <div>
                <Footer />
            </div>
        </Container>
    )
};

export default HomePage