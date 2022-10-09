import React, {
  useState
} from 'react';
import styles from '../styles/NavBar.module.css';
import {
  Navbar,
  Nav,
  Alert
} from 'react-bootstrap';
import {
  NavLink
} from 'react-router-dom';
import {
  useCurrentUser,
  useSetCurrentUser
} from '../context/CurrentUserContext';
import axios from 'axios';
import {
  removeTokenTimestamp
} from '../utilis/utilis';

const NavBar = () => {
    /** This navbar is a component that will be visable thorugh out the whole application.
     * Depending on the state of the user diffrent links will be visable to the site user. */

    const setCurrentUser = useSetCurrentUser();
    const [alertMessage, setAlertMessage] = useState(false);

    const handleLogOut = async () => {
      try {
        await axios.post("dj-rest-auth/logout");

        setAlertMessage(true);
        setTimeout(() => {
          setAlertMessage(false);
        }, 5000);

        setCurrentUser(null);

        removeTokenTimestamp();

      } catch (err) {
        console.log(err);
      }

    };

    const currentUser = useCurrentUser();
    const UserName = (<NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.NavLink}>  <i className="fa-solid fa-user"> </i> Username: {currentUser?.username} </NavLink>);
    const emptyUsername = "";


    const loggedIn = (<>
        <NavLink to="/myreviews" className={styles.NavLink}> <i className="fa-solid fa-bars"></i> My reviews</NavLink>
        <NavLink className={styles.NavLink} to="/createreview"><i className="fa-sharp fa-solid fa-plus"></i> Create review </NavLink>
        <NavLink to="/" className={styles.NavLink} onClick={handleLogOut}> <i className="fa-solid fa-arrow-right-from-bracket"> </i> Log out</NavLink>
    </>);

    const loggedOut = (<>
        <NavLink to="/signin" className={styles.NavLink}><i className="fa-solid fa-arrow-right-to-bracket"></i> Sign in</NavLink>
        <NavLink to="/signup" className={styles.NavLink}><i className="fa-solid fa-users"> </i> Sign Up</NavLink>
    </>);

    return (
        <Navbar bg="light" variant="light" className={styles.NavBar} expand="lg">
            <NavLink to="/">
                <Navbar.Brand className={`"ml-auto" ${styles.BrandLogo}`}> <i className="fa-solid fa-star"></i> Social Reviewer </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink to="/" className={styles.NavLink}> <i className="fas fa-home" > </i>Home</NavLink>
                    <NavLink to="/reviews" className={styles.NavLink}><i className="fa-solid fa-book-open"> </i> All reviews</NavLink>
                    <NavLink to={"/profilepage"} className={styles.NavLink} > <i className="fa-solid fa-users"></i>Profiles </NavLink>
                    {currentUser ? loggedIn : loggedOut}
                    {currentUser ? UserName : emptyUsername}
                </Nav>
                {alertMessage && <Alert variant="primary"> You have been logged out</Alert>}
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar