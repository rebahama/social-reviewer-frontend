import React from 'react'
import styles from '../styles/NavBar.module.css'
import Logo from '../assets/Logo-social-reviewer.png';
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    return (

        <Navbar bg="light" variant="light" className={styles.NavBar} expand="lg">
            
                <Navbar.Brand  href="#home" className="ml-auto"> <i className="fa-solid fa-star"></i> Social Reviewer   </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link href="#home"> <i className="fas fa-home"> </i>Home</Nav.Link>
                        <Nav.Link href="#hometwo"><i className="fa-solid fa-users"> </i> Sign Up</Nav.Link>
                        <Nav.Link href="#link"><i className="fa-solid fa-arrow-right-to-bracket"></i> Sign in</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Show all reviews</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

             
                
        </Navbar>
  )
}

export default NavBar