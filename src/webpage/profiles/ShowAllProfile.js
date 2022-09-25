import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ProfilePage from './ProfilePage'


function ShowAllProfile(props) {
    const {id} = props
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
            <h1> Profilepage</h1>
            {profile.results.map((profile) => {

              return  <ProfilePage key={profile.id} {...profile}/>

            })}
        </div>
    )
}

export default ShowAllProfile