import React from 'react'

import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    return (

        <Navbar bg="light" expand="lg" >
            
                <Navbar.Brand  href="#home" className="ml-auto">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Sign in</Nav.Link>
                        <Nav.Link href="#link">Sign up</Nav.Link>
                        <Nav.Link href="#link">Show all reviews</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                
        </Navbar>
  )
}

export default NavBar