import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';

const ProfilePage = (props) => {
    const {owner, is_owner,review_counter, name, image, profile_like, id} = props

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
<p> Reviews created: {review_counter}</p>
<p> Likes recived: {profile_like}</p>
<img src={image}/>
    </div>
  )
}

export default ProfilePage