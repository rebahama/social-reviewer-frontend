import React from 'react'
import styles from '../styles/MostLikedReview.module.css'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerAsset() {
  return (
    <div>
      
    <p className={styles.PopularText}> Page Loading.....</p><Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default SpinnerAsset