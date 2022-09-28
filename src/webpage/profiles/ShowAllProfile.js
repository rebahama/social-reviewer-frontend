import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ProfilePage from './ProfilePage'
import styles from '../../styles/ProfilePage.module.css'


function ShowAllProfile(props) {
    const {id} = props
    const [loaded, loadedcomplete] = useState(false)
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
            <h3 className={styles.TopText}> Profiles</h3>
            {profile.results.map((profile) => {

              return  <ProfilePage key={profile.id} {...profile}/>

            })}
        </div>
    )
}

export default ShowAllProfile