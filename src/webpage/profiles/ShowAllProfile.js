import React, {
  useEffect,
  useState
} from 'react';
import {
  axiosReq
} from '../../api/axios';
import ProfilePage from './ProfilePage';
import styles from '../../styles/ProfilePage.module.css';
import SpinnerAsset from '../../components/SpinnerAsset';

function ShowAllProfile() {

  const [loaded, loadedcomplete] = useState(false);
  const [profile, setProfile] = useState({
    results: []
  });

  useEffect(() => {
    let isMounted = true;
    const handleData = async () => {
      try {
        const {
          data
        } = await axiosReq.get("/profiles/");
        if (isMounted) {
          setProfile(data);
          loadedcomplete(true);
        }
      } catch (err) {
  

      }

    }
    loadedcomplete(false)
    handleData();
    return () => {
      isMounted = false;
    };

  }, []);

  return (

    <div>
      {loaded ?
        (<><h3 className={styles.TopText}> Profiles</h3> {profile.results.map((profile) => { return <ProfilePage key={profile.id} {...profile} /> })} </>)
        : (<SpinnerAsset />)}
    </div>

  )
}

export default ShowAllProfile