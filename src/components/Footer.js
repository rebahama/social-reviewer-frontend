import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
      /* Display a footer*/
      return (
            <div className={styles.Footer}>
                  <ul>
                        <li className="list-inline-item"><a href="https://sv-se.facebook.com/" target="_blank"rel=" noopener noreferrer"><i
                              className="fa-brands fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel=" noopener noreferrer"><i
                              className="fa-brands fa-instagram"> </i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer"><i
                              className="fa-brands fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i
                              className="fa-brands fa-linkedin"> </i></a></li>
                  </ul>
            </div>
      )
}

export default Footer