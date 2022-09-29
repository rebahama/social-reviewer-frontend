import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios';
import styles from '../../styles/ProfilePage.module.css'
const ProfilePage = (props) => {
  const { owner, is_owner, review_counter, name, image, profile_like, id, content } = props
  const realOwner = <Link to={`/profiles/${id}`}><h3> Click here to edit profile</h3> </Link>
  const [profile, setProfile] = useState({ results: [] });


  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        setProfile(data)
        console.log(profile)
      }
      catch (err) {
        console.log(err)

      }

    }
    
    const time = setTimeout(() => {
      handleData()


    }, 1000)


    return () => {
      clearTimeout(time)
    }
    

  }, [id])

  return (

    <Container>
     
      <Row>
        
        <Col md={12}>
        <div className={styles.Container}>
        <img src={image} className={styles.ProfileImage}/>
      <p> Username: {owner}</p>
      <p> Reviews created: {review_counter}</p>
      <p> Likes recived: {profile_like}</p>
      {name ? <>{name}</>:(<p> name not created yet....</p>) }
      <p> Bio: </p>
      {content ? <>{content}</>:(<p> Bio not created yet....</p>) }
      
      
      
      {is_owner && realOwner}
      </div>
      <hr/>
      </Col>
</Row>

    </Container>
  )
}

export default ProfilePage