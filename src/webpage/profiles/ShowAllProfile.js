import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axios';
import ProfilePage from './ProfilePage'
import styles from '../../styles/ProfilePage.module.css'
import SpinnerAsset from '../../components/SpinnerAsset';


function ShowAllProfile(props) {
    const {id} = props
    const [loaded, loadedcomplete] = useState(false)
    const [profile, setProfile] = useState({ results: [] });


    useEffect(() => {
        const handleData = async () => {
          try {
            const { data } = await axiosReq.get("/profiles/");
            setProfile(data)
            loadedcomplete(true)
          }
          catch (err) {
            console.log(err)
    
          }
    
        }
        loadedcomplete(false)
        const time = setInterval(() => {
          handleData()
    
    
        }, 1000)
    
    
        return () => {
          clearInterval(time)
        }
        
    
      }, [id])
    
    return (
        <div>
            <h3 className={styles.TopText}> Profiles</h3>
            {loaded ?
            (<>{profile.results.map((profile) => { return  <ProfilePage key={profile.id} {...profile}/>})} </>)
            : (<SpinnerAsset/>)}
        </div>
  )
}

export default ShowAllProfile