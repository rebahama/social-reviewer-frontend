import React, {useState} from 'react';
import styles from '../styles/NavBar.module.css';
import {Navbar, Nav, Button, Modal, } from 'react-bootstrap'
import {NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import axios from 'axios';



const NavBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

    const currentUser = useCurrentUser();
    const UserName = <NavLink to="/profilepage" className={styles.NavLink}>  <i className="fa-solid fa-user"> </i> Username: {currentUser?.username} </NavLink>
    
    const emptyUsername =""
    const loggedIn =<>  
    <NavLink to="/myreviews" className={styles.NavLink}> <i className="fa-solid fa-bars"></i> My reviews</NavLink>
    <NavLink className={styles.NavLink} to="/createreview"><i className="fa-sharp fa-solid fa-plus"></i> Create review </NavLink> 
    

    <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Logging out </Modal.Title>
         </Modal.Header>
         <Modal.Body>Are you sure you want to log out? </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               No
            </Button>
            <NavLink onClick={handleLogOut} to={`/`}>
                
               <Button variant="danger"> Yes </Button> </NavLink>
         </Modal.Footer>
      </Modal>
    
    <NavLink to="/" className={styles.NavLink} onClick={handleShow}> <i className="fa-solid fa-arrow-right-from-bracket"> </i> Log out</NavLink>
   
    
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
                    
                    <NavLink to="/reviews" className={styles.NavLink}><i className="fa-solid fa-book-open"> </i> All reviews</NavLink>
                    <NavLink to={"/profilepage"} className={styles.NavLink} > <i className="fa-solid fa-users"></i>Profiles </NavLink>
                    
                    {currentUser ? loggedIn:loggedOut}
                    {currentUser ? UserName:emptyUsername}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar