import React, { useContext } from 'react';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/Logo-social-reviewer.png';
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import axios from 'axios';


const NavBar = () => {
    const setCurrentUser = useSetCurrentUser()

    const handleLogOut = async () =>{
        try{
            await axios.post("dj-rest-auth/logout/")
            setCurrentUser(null);
        }
        catch(err){
            console.log(err)
        }

    }


    const addReviewSymbol = (

        <NavLink className={styles.NavLink} to="/create"><i className="fa-sharp fa-solid fa-plus"></i> Create review </NavLink>

    )
    const currentUser = useCurrentUser();
    const loggedIn =<> 
    <NavLink to="/myreviews" className={styles.NavLink}> <i className="fa-solid fa-bars"></i> My reviews</NavLink>
    <NavLink to={`/profilepage${currentUser?.profile_id}`} className={styles.NavLink} onClick={()=>{}}> <i className="fa-solid fa-user"></i> My page </NavLink>
    <NavLink to="/" className={styles.NavLink} onClick={handleLogOut}> <i className="fa-solid fa-arrow-right-from-bracket"> </i> Log out</NavLink>
    <NavDropdown title="Account" id="basic-nav-dropdown" >
                        <NavDropdown.Item href="#action/3.1"> {currentUser && addReviewSymbol}  </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">   <i className="fa-solid fa-arrow-right-from-bracket"> </i> Log out </NavDropdown.Item>
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
                    <Nav to="/" className={styles.NavLink} >Show all reviews</Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar