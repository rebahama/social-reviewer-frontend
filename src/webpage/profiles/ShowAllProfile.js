import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axios';
import ProfilePage from './ProfilePage';
import styles from '../../styles/ProfilePage.module.css';
import SpinnerAsset from '../../components/SpinnerAsset';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function ShowAllProfile(props) {
  const { id } = props;
  const [loaded, loadedcomplete] = useState(false);
  const [profile, setProfile] = useState({ results: [] });
  const { pathname } = useLocation()

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        setProfile(data);
        loadedcomplete(true);
      }
      catch (err) {
        console.log(err);

      }

    }
    loadedcomplete(false)
    handleData();


  }, [pathname]);

  return (

    <div>
      {loaded ?
        (<><h3 className={styles.TopText}> Profiles</h3> {profile.results.map((profile) => { return <ProfilePage key={profile.id} {...profile} /> })} </>)
        : (<SpinnerAsset />)}
    </div>

  )
}

export default ShowAllProfile