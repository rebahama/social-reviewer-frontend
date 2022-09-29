import React, { useContext } from 'react';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/Logo-social-reviewer.png';
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import axios from 'axios';
import { axiosReq } from '../api/axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


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

    const id = useParams()
    const currentUser = useCurrentUser();
    const loggedIn =<>  
    <NavLink to="/myreviews" className={styles.NavLink}> <i className="fa-solid fa-bars"></i> My reviews</NavLink>
    <NavLink className={styles.NavLink} to="/createreview"><i className="fa-sharp fa-solid fa-plus"></i> Create review </NavLink> 
    <NavLink to="/" className={styles.NavLink} onClick={handleLogOut}> <i className="fa-solid fa-arrow-right-from-bracket"> </i> Log out</NavLink>
    {currentUser?.username}
    
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
                    <NavLink to="/category" className={styles.NavLink}><i className="fa-solid fa-arrow-right-to-bracket"></i> Category</NavLink>
                    {currentUser ? loggedIn:loggedOut}
                    <NavLink to="/reviews" className={styles.NavLink}><i className="fa-solid fa-users"> </i> All reviews</NavLink>
                    <NavLink to={"/profilepage"} className={styles.NavLink} onClick={()=>{}}> <i className="fa-solid fa-user"></i>Profiles </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar