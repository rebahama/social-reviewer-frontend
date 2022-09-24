import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerAsset() {
  return (
    <div>
      
    <p> Page Loading.....</p><Spinner animation="grow" variant="primary" />
    </div>
  )
}

export default SpinnerAsset