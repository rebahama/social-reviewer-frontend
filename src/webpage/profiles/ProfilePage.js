import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axios';

const ProfilePage = (props) => {
    const {owner, is_owner,review_counter, name, image, profile_like, id} = props
    const realOwner = <Link to={`/profiles/${id}`}><h3> CLick here to edit profile</h3> </Link>
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
        handleData()
    
      }, [id])
  
return (
    <div>
       
<p> Username: {owner}</p>
{is_owner && realOwner}
<p> Reviews created: {review_counter}</p>
<p> Likes recived: {profile_like}</p>

<img src={image}/>

    </div>
  )
}

export default ProfilePage