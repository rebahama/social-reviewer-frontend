import React, { useContext } from 'react';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/Logo-social-reviewer.png';
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../context/CurrentUserContext';


const NavBar = () => {
    const addReviewSymbol = (

        <NavLink className={styles.NavLink} to="/create"><i className="fa-sharp fa-solid fa-plus"></i> Create review </NavLink>

    )
    const currentUser = useCurrentUser();
    const loggedIn =<> 
    <NavLink to="/myreviews" className={styles.NavLink}><i className="fa-solid fa-bars"></i> My reviews</NavLink>
    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"> {currentUser && addReviewSymbol} </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">{currentUser?.username}</NavDropdown.Item>
                    </NavDropdown>
    
    </>
    const loggedOut = <>
    <NavLink to="/signin" className={styles.NavLink}><i className="fa-solid fa-arrow-right-to-bracket"></i> Sign in</NavLink>
    <NavLink to="/signup" className={styles.NavLink}><i className="fa-solid fa-users"> </i> Sign Up</NavLink>
    </>
    return (
        <Navbar bg="light" variant="light" className={styles.NavBar} expand="lg">
             <NavLink to="/">
            <Navbar.Brand className={`"ml-auto" ${styles.BrandLogo}`}> <i className="fa-solid fa-star"></i> Social Reviewer </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink to="/"  className={styles.NavLink}> <i className="fas fa-home" > </i>Home</NavLink>
                    {currentUser ? loggedIn:loggedOut}
                    <Nav.Link href="#link">Show all reviews</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar