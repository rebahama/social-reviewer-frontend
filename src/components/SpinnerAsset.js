import React from 'react'
import styles from '../styles/MostLikedReview.module.css'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerAsset() {
  /** A spinner that is displayed everytime when the user makes a get request to the API */
  return (
    <div>
      <p className={styles.PopularText}> Page Loading.....</p><Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default SpinnerAsset