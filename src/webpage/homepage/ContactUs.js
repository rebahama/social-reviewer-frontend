import React from 'react'
import styles from '../../styles/ContactUs.module.css'
import contactUs from '../../assets/contactUs.gif'
import { Container, Row } from 'react-bootstrap'

function ContactUs() {
    return (
        <Container>
            <div className={styles.ContainerGif}>
            <h3> Need help? Please email us at: wiri@hotmail.se</h3>
            <Row className="offset-md-4 offset-sm-4">
                <img src={contactUs} className={styles.ContactUsGif} alt="women speaking in phone" />
            </Row>
        </div>
        </Container >
    )
}

export default ContactUs